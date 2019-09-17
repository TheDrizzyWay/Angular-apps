import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  backgroundStyle: object;

  @Input() movie: any; // change type later
  constructor() {
    this.backgroundStyle = {
      backgroundSize: 'cover',
      // backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.movie.backdrop_path})`,
      backgroundPosition: 'center',
    };
  }

  ngOnInit() {
  }

  dummy() {
    alert('not a movie!');
  }
}
