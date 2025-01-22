declare global {
  interface Window {
    __env: {
      WEATHER_API_KEY: string;
    }
  }
}

export const environment = {
  production: true,
  apiKey: window.__env?.WEATHER_API_KEY || ''
};
