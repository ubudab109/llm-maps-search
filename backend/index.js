import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config/index.js';
import { limiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';
import apiRoutes from "./routes/index.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: '*' }));
app.use(limiter);

// Routes
app.use('/api', apiRoutes);

// Error handler
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server running at http://localhost:${config.PORT}`);
});
