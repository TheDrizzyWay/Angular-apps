import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlbumObject } from './models/Album';
import { TrackObject } from './models/Track';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  albumUrl: string;
  trackUrl: string;
  constructor(private http: HttpClient) {
    this.albumUrl = 'https://theaudiodb.com/api/v1/json/1/searchalbum.php';
    this.trackUrl = 'https://theaudiodb.com/api/v1/json/1/track.php';
  }

  getAlbums(name: string): Observable<any[]> {
    return this.http.get<AlbumObject>(`${this.albumUrl}?s=${name}`)
    .pipe(map(albumObject => albumObject.album));
  }

  getTracks(id: string): Observable<any[]> {
    return this.http.get<TrackObject>(`${this.trackUrl}?m=${id}`)
     .pipe(map(trackObject => trackObject.track));
  }
}
