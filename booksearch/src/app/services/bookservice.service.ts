import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IBookObject } from '../models/BookObject';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  searchUrl: string = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }

  getBooks(term: string): Observable<IBookObject> {
    return this.http.get<IBookObject>(`${this.searchUrl}?q=${term}&startIndex=0`)
      .pipe(tap(() => console.log('fetched')), catchError(err => this.handleError(err)));
  }

  handleError(err: any): Observable<any> {
    console.log(err);
    return throwError(err.message);
  }
}
