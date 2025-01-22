export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: [{
    description: string;
    icon: string;
  }];
  coord: {
    lat: number;
    lon: number;
  };
  wind:{
    speed: number;
    deg: number;
  };
}
