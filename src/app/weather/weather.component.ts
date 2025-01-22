import { Component } from '@angular/core';
import * as L from 'leaflet';
import { WeatherService } from '../services/weather/weather.service';
import { WeatherData } from '../interfaces/weather/weather';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  city = '';
  weatherData: WeatherData | null = null;
  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  protected Math = Math;

  constructor(private weatherService: WeatherService) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
  }

  updateCity(event: Event) {
    const input = event.target as HTMLInputElement;
    this.city = input.value;
  }

  private initMap(lat: number, lon: number): void {
    setTimeout(() => {
      const container = document.getElementById('map');
      if (!container) {
        console.error('Map container not found');
        return;
      }

      if (this.map) this.map.remove();
      if (this.marker) this.marker.remove();

      this.map = L.map('map').setView([lat, lon], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.marker = L.marker([lat, lon]).addTo(this.map);
    }, 100);
  }

  fetchWeather() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe({
        next: (data) => {
          this.weatherData = data;
          this.initMap(data.coord.lat, data.coord.lon);
        },
        error: (error) => console.error('Error fetching weather:', error)
      });
    }
  }

  getWeatherIcon(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  getWindDirection(degrees: number): string {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                       'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(((degrees % 360) / 22.5));
    return directions[index % 16];
  }
}
