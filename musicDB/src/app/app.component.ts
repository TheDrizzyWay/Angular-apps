import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { AppserviceService } from './appservice.service';
import { Album } from './models/Album';
import { TracksModalComponent } from './tracks-modal.component';

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
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
    ) {
    this.result = {} as Album;
    this.items = [];
  }

  ngOnInit(): void {
    this.searchArtiste('eminem');
  }

  searchArtiste(name: string): void {
    this.spinner.show('mySpinner', { type: 'line-scale' });
    if (!name) {
      this.spinner.hide('mySpinner');
      return alert('please insert artiste name');
    }

    this.appService.getAlbums(name).subscribe(albums => {
      if (!albums) {
        this.spinner.hide('mySpinner');
        return alert(`No result found for ${name}`);
      }
      const removeSingles = albums.filter(album => album.strReleaseFormat === 'Album');
      removeSingles.sort((a, b) => {
        return (+b.intYearReleased) - (+a.intYearReleased);
      });

      this.result = removeSingles[0];
      this.items = removeSingles;
      this.spinner.hide('mySpinner');
    });
  }

  setItem(id: string): void {
    this.result = this.items.find(item => item.idAlbum === id);
  }

  setClass(id: string) {
    const classes = { active: id === this.result.idAlbum };
    return classes;
  }

  openDialog(): void {
    this.dialog.open(TracksModalComponent, {
      width: '400px',
      height: '500px',
      data: { album: this.result.idAlbum }
    });
  }
}
