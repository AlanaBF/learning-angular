declare const process: any;
export const environment = {
  production: true,
  apiKey: process.env['NEXT_PUBLIC_WEATHER_API_KEY'] || ''
};
