import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumObject } from './models/Album';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  albumUrl: string;
  constructor(private http: HttpClient) {
    this.albumUrl = 'https://theaudiodb.com/api/v1/json/1/searchalbum.php';
  }

  getAlbums(name: string): Observable<any[]> {
    return this.http.get<AlbumObject>(`${this.albumUrl}?s=${name}`)
    .pipe(map(albumObject => albumObject.album));
  }
}
