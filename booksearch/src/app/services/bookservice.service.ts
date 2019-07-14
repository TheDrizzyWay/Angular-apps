import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  searchUrl: string = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }

  getBooks(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.searchUrl}?q=${term}&startIndex=0`);
  }
}
