import express from "express";
import searchRoutes from "./search.js";
import modelRoutes from "./model.js";

const router = express.Router();

router.use(searchRoutes);
router.use(modelRoutes);

export default router;
