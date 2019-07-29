import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class BooksComponent implements OnInit {
  public books: any[];
  public message: string;
  constructor(private bookService: BookService) { 
    this.books = [];
    this.message = '';
  }

  ngOnInit() {
    if(!this.books.length) this.message = 'Please enter a search term.';
  }

  searchBook(term: string): void {
    this.bookService.getBooks(term).subscribe((items) => {
      if(!items) return this.message = `No results found for ${term}`;
      this.books = items;
      console.log(this.books);
      this.message = '';
    });
  }

}
