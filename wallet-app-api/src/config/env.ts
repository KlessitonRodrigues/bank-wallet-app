import { config } from 'dotenv';

config();

export const env = {
  MONGO_URI: process.env.MONGO_URI,
  TOKEN_KEY: process.env.TOKEN_KEY,
};
