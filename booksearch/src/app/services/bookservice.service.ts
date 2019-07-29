import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IBookObject } from '../models/BookObject';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  searchUrl: string;
  constructor(private http: HttpClient) {
    this.searchUrl = 'https://www.googleapis.com/books/v1/volumes';
   }

  getBooks(term: string): Observable<any[]> {
    return this.http.get<IBookObject>(`${this.searchUrl}?q=${term}&startIndex=0`)
      .pipe(tap(() => console.log('fetched')),
      map(res => res.items),
      catchError(err => this.handleError(err)));
  }

  handleError(err: any): Observable<any> {
    console.log(err);
    return throwError(err.message);
  }
}
