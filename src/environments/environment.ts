import * as dotenv from 'dotenv';
dotenv.config();

export const environment = {
  production: true,
  apiKey: process.env['WEATHER_API_KEY'],
};
