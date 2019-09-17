import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  selectedMovie: any; // change type later
  constructor() { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    // change later
    this.selectedMovie = { name: 'test', overview: 'test' };
  }
}
