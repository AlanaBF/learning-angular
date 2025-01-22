declare global {
  interface Window {
    __env: {
      WEATHER_API_KEY: string;
    }
  }
}

interface Environment {
  production: boolean;
  apiKey: string;
}

export const environment: Environment = {
  production: true,
  apiKey: window.__env?.WEATHER_API_KEY || ''
};
