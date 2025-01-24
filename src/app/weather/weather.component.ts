import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { WeatherService } from '../services/weather/weather.service';
import { WeatherData } from '../interfaces/weather/weather';
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements AfterViewInit, OnInit {
  city = 'Birmingham, UK';
  weatherData: WeatherData | null = null;
  loading = false;
  private map: L.Map | null = null;
  private marker: L.Marker | null = null;
  protected Math = Math;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeather(); // Load London weather by default
  }

  private initMap(lat: number, lon: number): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      const container = document.getElementById('map');
      if (!container) {
        console.error('Map container not found');
        return;
      }

      // Clean up existing map and marker
      if (this.map) this.map.remove();
      if (this.marker) this.marker.remove();

      const icon = L.icon({
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      // Initialize map with options
      this.map = L.map('map', {
        center: [lat, lon],
        zoom: 13,
        zoomControl: true,
        maxZoom: 18,
        minZoom: 3,
      });

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);

      // Add marker with popup
      this.marker = L.marker([lat, lon], { icon })
        .bindPopup(this.city || 'Location')
        .addTo(this.map);
    }, 0);
  }

  ngAfterViewInit(): void {
    this.initMap(51.5074, -0.1278); // Default to London coordinates
  }

  updateCity(event: Event) {
    const input = event.target as HTMLInputElement;
    this.city = input.value;
  }

  fetchWeather() {
    if (this.city) {
      this.loading = true;
      this.weatherService.getWeather(this.city).subscribe({
        next: (data) => {
          this.weatherData = data;
          this.initMap(data.coord.lat, data.coord.lon);
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching weather:', error);
          this.loading = false;
        },
      });
    }
  }

  getWeatherIcon(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  getWindDirection(degrees: number): string {
    const directions = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];
    const index = Math.round((degrees % 360) / 22.5);
    return directions[index % 16];
  }
}
