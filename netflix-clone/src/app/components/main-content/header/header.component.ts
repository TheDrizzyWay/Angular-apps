import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from '../../../models/TvShow';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() movie: TvShow;

  constructor() {}

  ngOnInit() {

  }

  dummy() {
    alert('not a movie!');
  }

  setBackgroundStyle() {
    const backgroundStyle = {
      backgroundSize: 'cover',
      backgroundImage: this.movie ? `url(https://image.tmdb.org/t/p/original/${this.movie.backdrop_path})` : null,
      backgroundPosition: 'center',
    };
    return backgroundStyle;
  }
}
