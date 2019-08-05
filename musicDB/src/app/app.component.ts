import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  results: any[];
  items: any[];
  constructor() {
    this.results = [{ id: 1 }];
    this.items = ['a', 'b', 'c'];
  }

  ngOnInit(): void {
  }

  searchItem(id: number) {

  }
}
