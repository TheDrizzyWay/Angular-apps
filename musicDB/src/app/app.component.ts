import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  constructor(
    private appService: AppserviceService,
    private spinner: NgxSpinnerService
    ) {
    this.result = {} as Album;
    this.items = ['a', 'b', 'c'];
  }

  ngOnInit(): void {
    this.searchArtiste('eminem');
  }

  searchArtiste(name: string): void {
    this.spinner.show('mySpinner', { type: 'line-scale' });
    if (!name) {
      return alert('please insert artiste name');
    }
    this.appService.getAlbums(name).subscribe(albums => {
      const removeSingles = albums.filter(album => album.strReleaseFormat === 'Album');
      removeSingles.sort((a, b) => {
        return (+b.intYearReleased) - (+a.intYearReleased);
      });

      this.result = removeSingles[0];
      setTimeout(() => this.spinner.hide('mySpinner'), 2000);
    });
  }
}
