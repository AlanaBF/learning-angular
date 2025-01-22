import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherData } from '@interfaces/weather/weather';
// import { environment } from '@environments/environment.development';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {
    console.log('Weather Service Initialized - API Key Present:', !!this.apiKey);
  }

  getWeather(city: string): Observable<WeatherData> {
    if (!this.apiKey) {
      const error = 'Weather API key not configured';
      console.error(error);
      return throwError(() => new Error(error));
    }

    return this.http.get<WeatherData>(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.status === 401
      ? 'Invalid API key or unauthorized access'
      : `Weather API error: ${error.message}`;
    console.error('API Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
