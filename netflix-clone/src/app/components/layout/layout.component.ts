import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private scrollEvent$: Observable<any>;
  scrolling: boolean;
  constructor() {
    this.scrolling = false;
  }

  ngOnInit() {
    this.registerScrollEvent();
    this.subscribeScrollEvent();
  }

  private registerScrollEvent(): void {
    this.scrollEvent$ = fromEvent(window, 'scroll');
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
