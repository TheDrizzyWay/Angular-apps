import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @ViewChild('search', { static: false }) searchRef: ElementRef;
  @ViewChild('icon', { static: false }) iconRef: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  toggleClass():void {
    const hasClass = this.searchRef.nativeElement.classList.contains('search-open');
    if(hasClass) {
      this.searchRef.nativeElement.classList.remove('search-open');
      this.iconRef.nativeElement.classList.remove('search-icon-open');
    } else {
      this.searchRef.nativeElement.classList.add('search-open');
      this.iconRef.nativeElement.classList.add('search-icon-open');
    }
  }
}
