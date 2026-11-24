import 'dotenv/config';

const databaseUrl: string | undefined = process.env.DATABASE_URL;

if (!databaseUrl?.trim()) {
  throw new Error('DATABASE_URL is missing. Set it in your local .env file.');
}

export const ENV = {
  PORT: process.env.PORT || 8001,
  DATABASE_URL: databaseUrl,
  NODE_ENV: process.env.NODE_ENV,
};
