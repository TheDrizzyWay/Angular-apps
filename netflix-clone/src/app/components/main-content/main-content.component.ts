import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { TvShow } from '../../models/TvShow';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  selectedMovie: TvShow;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getDefaultMovie();
  }

  getDefaultMovie(): void {
    this.movieService.getDefault().subscribe(res => this.selectedMovie = res);
  }
}
