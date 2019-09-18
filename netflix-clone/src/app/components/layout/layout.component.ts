import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  movieList: any[];
  toggleSearch: boolean;
  constructor() {
    this.toggleSearch = true;
  }

  ngOnInit() {}

}
