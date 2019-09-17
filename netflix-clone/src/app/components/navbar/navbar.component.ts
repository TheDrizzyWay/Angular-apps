import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private scrollEvent$: Observable<Event>;
  scrolling: boolean;

  constructor() {
    this.scrolling = false;
  }

  ngOnInit() {
    this.scrollEvent$ = fromEvent(window, 'scroll');
    this.subscribeScrollEvent();
  }

  private subscribeScrollEvent() {
    this.scrollEvent$
      .pipe(map((e: any) => ({ height: e.target.scrollingElement.scrollTop })))
        .subscribe(obj => this.scrolling = (obj.height > 500));
  }

  setNavClass(): object {
    const classes = {
      navigation: true,
      black: this.scrolling
     };
    return classes;
  }

  showMovies() {

  }
}
