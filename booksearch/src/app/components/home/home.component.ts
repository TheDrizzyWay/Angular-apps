import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { BookService } from '../../services/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class BooksComponent implements AfterViewInit, OnInit {
  public books: any[];
  public message: string;
  startIndex: number;
  searchTerm: string;
  observer: IntersectionObserver;

  @ViewChild('target', { static: false }) targetRef: ElementRef;
  constructor(private bookService: BookService) {
    this.books = [];
    this.message = '';
    this.startIndex = 0;
  }

  ngOnInit() {
    if (!this.books.length) { this.message = 'Please enter a search term.'; }
    this.observer = new IntersectionObserver(this.handleObserver, {
      root: null,
      threshold: 1
  });
  }

  ngAfterViewInit() {
    this.observer.observe(this.targetRef.nativeElement);
  }

  targetClass() {
    const classes = {
      target: true,
      'show-target': !this.books.length
    };
    return classes;
  }

  searchBook(term: string): void {
    this.bookService.getBooks({ term, startIndex: this.startIndex }).subscribe((items) => {
      if (!items) { return this.message = `No results found for ${term}`; }
      this.books = items;
      this.message = '';
      this.startIndex += 10;
      this.searchTerm = term;
    });
  }

  handleObserver = (entities: any, options: any) => {
    if (this.startIndex > 0) {
      this.bookService.getBooks({ term: this.searchTerm, startIndex: this.startIndex })
        .subscribe((items) => {
          this.books = this.books.concat(items);
          this.startIndex += 10;
        });
    }
  }
}
