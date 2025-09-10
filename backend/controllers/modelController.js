import { getModels } from "../services/llmService.js";

export async function modelsController(req, res, next) {
    try {
        const response = await getModels();
        res.json(response);
    } catch(err) {
        next(err)
    }
}