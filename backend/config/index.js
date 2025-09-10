import 'dotenv/config';

export const config = {
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  OPENWEBUI_URL: process.env.OPENWEBUI_URL || 'http://localhost:3000/api',
  OPENWEBUI_API_KEY: process.env.OPENWEBUI_API_KEY || '',
  PORT: Number(process.env.PORT) || 8080,
  RATE_LIMIT_PER_MIN: Number(process.env.RATE_LIMIT_PER_MIN) || 60
};

if (!config.GOOGLE_API_KEY) {
  console.error('Missing GOOGLE_API_KEY in .env');
  process.exit(1);
}
