import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherData } from '@interfaces/weather/weather';
import { environment } from '@environments/environment';
// import { environment } from '@environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherData> {
    if (!this.apiKey) {
      return throwError(() => new Error('Weather API key not configured'));
    }

    return this.http.get<WeatherData>(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Weather API error: ' + error.message));
  }
}
