import fetch from 'node-fetch';
import { cache } from '../utils/cache.js';
import { config } from '../config/index.js';
import pino from 'pino';
const logger = pino({ level: 'info' });

/**
 * Helper fetch with timeout
 * @param {String} url
 * @param {Number} timeout
 */
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        return res;
    } catch (err) {
        clearTimeout(id);
        throw err;
    }
}

/**
 * Google Places API request
 * @param {String} query 
 */
export async function googlePlacesTextSearch(query) {
    if (!query?.trim()) {
        throw new Error('Query is required');
    }

    const cacheKey = `places:${query}`;
    const cached = cache.get(cacheKey);
    if (cached) {
        return cached
    };

    let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${config.GOOGLE_API_KEY}&language=id`;

    const maxRetries = 2;
    let attempt = 0;
    let data = null;

    while (attempt <= maxRetries) {
        try {
            attempt++;
            const res = await fetchWithTimeout(url, 5000); // 5s timeout
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            data = await res.json();

            if (data.status === 'OK' || data.status === 'ZERO_RESULTS') {
                logger.info(`Google Places API Success after ${maxRetries} retries`);
                break;
            }

            logger.warn({ status: data.status, error: data.error_message }, 'Google Places API warning');
            if (attempt > maxRetries) {
                throw new Error(`Google Places API failed after ${maxRetries} retries`);
            }

        } catch (err) {
            logger.error({ err, attempt }, 'Failed Google Places fetch attempt');
            if (attempt > maxRetries) {
                throw new Error('Google Places request failed');
            }
        }
    }

    cache.set(cacheKey, data);
    return data;
}

/**
 * Build URLs for embed iframe & direct maps
 * @param {Object}
 *  - query: Object
 *  - searchQuery: String
 */
export function buildEmbedAndMapsUrl({ firstResult, searchQuery }) {
    if (firstResult) {
        const placeId = firstResult.place_id;
        const name = firstResult.name || searchQuery;
        return {
            embedUrl: `https://www.google.com/maps/embed/v1/place?key=${config.GOOGLE_API_KEY}&q=place_id:${placeId}&zoom=15`,
            mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}&query_place_id=${placeId}`
        };
    }

    return {
        embedUrl: `https://www.google.com/maps/embed/v1/search?key=${config.GOOGLE_API_KEY}&q=${encodeURIComponent(searchQuery)}&zoom=12`,
        mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`
    };
}
