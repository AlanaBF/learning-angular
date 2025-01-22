declare const process: any;
export const environment = {
  production: true,
  apiKey: process.env['WEATHER_API_KEY'] || ''
};
