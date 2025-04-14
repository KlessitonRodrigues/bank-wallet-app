import mongoose from 'mongoose';

import { env } from './env';

export const databaseConnect = async () => {
  await mongoose.connect(env.MONGO_URI);
  console.log('DATABASE CONNECTED! 123');
};
