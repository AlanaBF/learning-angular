declare global {
  interface Window {
    env: {
      WEATHER_API_KEY: string;
    }
  }
}

export const environment = {
  production: true,
  apiKey: window?.env?.WEATHER_API_KEY || ''
};
