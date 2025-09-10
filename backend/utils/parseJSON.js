/**
 * The function `tryParseJSONFromText` attempts to extract and parse JSON data from a given text input.
 * @param {String} text - The `tryParseJSONFromText` function is designed to extract and parse JSON data from a
 * given text string. It searches for a JSON object within the text using a regular expression and
 * attempts to parse it. If successful, it returns the parsed JSON object; otherwise, it returns null.
 * @returns The function `tryParseJSONFromText` returns the parsed JSON object if it can be extracted
 * and parsed successfully from the input text. If the JSON object cannot be extracted or there is an
 * error during parsing, it returns `null`.
 */
export function tryParseJSONFromText(text) {
    const m = text?.match(/\{[\s\S]*\}/);
    if (!m) return null;
    try { return JSON.parse(m[0]); } catch { return null; }
}
