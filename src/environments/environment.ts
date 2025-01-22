declare global {
  var process: {
    env: {
      [key: string]: string | undefined
    }
  }
}

export const environment = {
  production: true,
  apiKey: process.env['WEATHER_API_KEY'] || ''
};
