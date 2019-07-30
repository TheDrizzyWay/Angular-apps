import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() searchBook: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onEnter(term: string): void {
    this.searchBook.emit(term);
  }
}
