import fetch from 'node-fetch';
import { config } from '../config/index.js';
import { tryParseJSONFromText } from '../utils/parseJSON.js';

/**
 * The function `askLLMForQuery` uses a language model to extract a concise search query for Google
 * Places from a user prompt, returning the query in JSON format.
 * @param {String} userPrompt - The `userPrompt` parameter is the input provided by the user, which is the text
 * or prompt from the user requesting a search query for Google Places. This input will be used by the
 * function to generate a concise search query.
 * @param {String} model - The model need to selected
 * @returns The function `askLLMForQuery` returns a JSON object with a `query` field that contains a
 * short text for place search extracted from the user's prompt. If the extraction from the LLM model
 * is successful, it returns the extracted query. If the extraction fails or there is no valid query
 * extracted, it falls back to returning the user's original prompt as the query.
 */
export async function askLLMForQuery(userPrompt, model) {
    const systemPrompt = `
  You are an assistant that extracts a concise search query for Google Places from user's prompt.
  Return JSON only, no extra text. Fields:
  - query: short text for place search (e.g., "sushi near jakarta kota")
  Example:
  {"query":"sushi near jakarta kota"}
  `.trim();

    const body = {
        model: model,
        messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
        ],
        max_tokens: 120,
        temperature: 0.1
    };

    const headers = { 'Content-Type': 'application/json' };
    if (config.OPENWEBUI_API_KEY) {
        headers['Authorization'] = `Bearer ${config.OPENWEBUI_API_KEY}`;
    }

    const res = await fetch(`${config.OPENWEBUI_URL}/chat/completions`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        const t = await res.text().catch(() => '');
        throw new Error(`LLM error: HTTP ${res.status} ${t}`);
    }

    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content ?? '';
    const json = tryParseJSONFromText(content);

    // fallback ke userPrompt jika LLM gagal
    if (json?.query?.trim()) return { query: json.query.trim() };
    return { query: userPrompt.trim() };
}


/**
 * The function `getModels` makes an asynchronous request to fetch models data from a specified URL and
 * returns the data if successful, otherwise throws an error.
 * @returns The function `getModels` is returning the data fetched from the
 * `${config.OPENWEBUI_URL}/models` endpoint after checking for a successful response. If the response
 * is not successful, an error is thrown with the corresponding status code.
 */
export async function getModels() {
    try {
        const headers = { 'Content-Type': 'application/json' };
        if (config.OPENWEBUI_API_KEY) {
            headers['Authorization'] = `Bearer ${config.OPENWEBUI_API_KEY}`;
        }
        const response = await fetch(`${config.OPENWEBUI_URL}/models`, {
            headers
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch models: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
        throw new Error(`Failed to fetch models: ${err}`);
    }
}