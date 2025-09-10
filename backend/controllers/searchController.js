import { askLLMForQuery } from '../services/llmService.js';
import { googlePlacesTextSearch, buildEmbedAndMapsUrl } from '../services/googleMapsService.js';

export async function searchController(req, res, next) {
    try {
        const { prompt, model } = req.body || {};

        if (!prompt?.trim()) {
            return res.status(400).json({ error: "Prompt is required" });
        }
        
        if (!model?.trim()) {
            return res.status(400).json({ error: "Model is required" });
        }

        // Asking LLM to extracting query
        const parsed = await askLLMForQuery(prompt, model.trim());
        const searchQuery = (parsed.query || prompt).trim();

        // 3. Calling GOOGLE PLACES API
        const places = await googlePlacesTextSearch(searchQuery);

        const first = places?.results?.[0] || null;
        const { embedUrl, mapsUrl } = buildEmbedAndMapsUrl({ firstResult: first, searchQuery });

        // 4.Build response
        res.json({
            query: searchQuery,
            places: places?.results || [],
            embedUrl,
            mapsUrl,
            status: places?.status
        });

    } catch (err) {
        next(err);
    }
}
