import rateLimit from 'express-rate-limit';
import { config } from '../config/index.js';

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: config.RATE_LIMIT_PER_MIN,
  standardHeaders: true,
  legacyHeaders: false,
});
