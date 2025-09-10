import express from 'express';
import { modelsController } from '../controllers/modelController.js';

const router = express.Router();

router.get('/models', modelsController);

export default router;
