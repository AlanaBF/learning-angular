declare global {
  interface Window {
    process: {
      env: {
        [key: string]: string;
      };
    }
  }
}

export const environment = {
  production: true,
  apiKey: window.process?.env?.['WEATHER_API_KEY'] || ''
};
