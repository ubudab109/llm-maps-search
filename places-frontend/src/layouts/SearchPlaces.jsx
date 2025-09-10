import { useState, useEffect } from "react";

export default function SearchPlaces() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [activeEmbedUrl, setActiveEmbedUrl] = useState(null);

    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState("");

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/models`
                );
                const json = await res.json();
                const data = json.data
                console.log("models response:", json.data);
                if (!res.ok) {
                    throw new Error(json.error || "Failed to load models");
                }

                setModels(data);
                if (data.length > 0) {
                    setSelectedModel(data[0].id || data[0].name);
                }
            } catch (err) {
                console.error("Error fetching models:", err);
                setError(err.message);
            }
        };
        fetchModels();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/search`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt, model: selectedModel }),
            });

            const json = await res.json();
            if (!res.ok) {
                throw new Error(json.error || "Unknown error");
            }

            setData(json);
            setActiveEmbedUrl(json.embedUrl); // default show first map
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            {/* Select Model */}
            <div style={{ marginBottom: "10px" }}>
                <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    style={{
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                    }}
                >
                    {models.length ? 
                      models.map((model, idx) => (
                        <option key={idx} value={model.id || model.name}>
                            {model.name || model.id}
                        </option>
                    ))
                    : 
                      <option value="">
                          No Models Data
                      </option>
                    }
                </select>
            </div>

            {/* Search Box */}
            <form
                onSubmit={handleSearch}
                style={{
                    display: "flex",
                    gap: "10px",
                    marginBottom: "20px",
                    marginTop: "20px",
                }}
            >
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Search any places... ex Sushi near Jakarta"
                    style={{
                        flex: 1,
                        padding: "12px",
                        borderRadius: "20px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "12px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#1976d2",
                        color: "white",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {data && (
                <div>
                    <h2 style={{ marginBottom: "10px" }}>
                        Result: {data.query}
                    </h2>

                    {/* Embed Maps */}
                    {activeEmbedUrl && (
                        <iframe
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: "10px" }}
                            loading="lazy"
                            allowFullScreen
                            src={activeEmbedUrl}
                            title="Google Maps"
                        ></iframe>
                    )}

                    <div
                        style={{
                            marginTop: "20px",
                            height: "25rem",
                            overflow: "auto",
                        }}
                    >
                        {data.places.map((place, idx) => {
                            const placeEmbed = `https://www.google.com/maps/embed/v1/place?key=${
                                import.meta.env.VITE_GOOGLE_API_KEY
                            }&q=place_id:${place.place_id}`;
                            const placeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                place.name
                            )}&query_place_id=${place.place_id}`;

                            return (
                                <div
                                    key={idx}
                                    style={{
                                        border: "1px solid #ddd",
                                        borderRadius: "8px",
                                        padding: "15px",
                                        marginBottom: "15px",
                                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <h3 style={{ margin: "0 0 8px" }}>
                                        {place.name}
                                    </h3>
                                    <p
                                        style={{
                                            margin: "0 0 8px",
                                            color: "#555",
                                        }}
                                    >
                                        {place.formatted_address}
                                    </p>
                                    <p style={{ margin: "0 0 12px" }}>
                                        ⭐ {place.rating || "-"} (
                                        {place.user_ratings_total || 0} reviews)
                                    </p>
                                    <div
                                        style={{ display: "flex", gap: "10px" }}
                                    >
                                        <button
                                            style={{
                                                padding: "8px 12px",
                                                border: "none",
                                                borderRadius: "6px",
                                                background: "#4caf50",
                                                color: "white",
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                setActiveEmbedUrl(placeEmbed)
                                            }
                                        >
                                            View Map
                                        </button>
                                        <a
                                            href={placeMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                padding: "8px 12px",
                                                borderRadius: "6px",
                                                background: "#1976d2",
                                                color: "white",
                                                textDecoration: "none",
                                            }}
                                        >
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
