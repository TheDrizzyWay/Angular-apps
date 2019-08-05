import { Component, OnInit } from '@angular/core';
import { AppserviceService } from './appservice.service';
import { Album } from './models/Album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result: Album;
  items: any[];
  constructor(private appService: AppserviceService) {
    this.result = {} as Album;
    this.items = ['a', 'b', 'c'];
  }

  ngOnInit(): void {
    this.searchArtiste('eminem');
  }

  searchArtiste(name: string): void {
    if (!name) {
      return alert('please insert artiste name');
    }
    this.appService.getAlbums(name).subscribe(albums => {
      this.result = albums[0];
    });
  }
}
