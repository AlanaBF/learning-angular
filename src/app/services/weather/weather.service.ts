import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WeatherData } from '@interfaces/weather/weather';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${this.apiUrl}?q=${city}&appid=${environment.apiKey}&units=metric`
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error('Weather API error: ' + error.message));
  }
}
