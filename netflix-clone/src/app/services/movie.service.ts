import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TvShow } from '../models/TvShow';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  defaultUrl: string;
  apiKey: string;
  defaultId: number;

  constructor(private http: HttpClient) {
    this.defaultUrl = 'https://api.themoviedb.org/3';
    this.apiKey = environment.apiKey;
    this.defaultId = 60622;
  }

  getDefault(): Observable<TvShow> {
    return this.http.get<any>(`${this.defaultUrl}/tv/${this.defaultId}?api_key=${this.apiKey}`)
      .pipe(tap(() => console.log('movie fetched')), catchError(err => this.handleError(err)));
  }

  private handleError(err: any): Observable<any> {
    console.log(err);
    return throwError(err);
  }
}
