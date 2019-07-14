import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/bookservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  public message: string = '';
  constructor(private bookService: BookService) { }

  ngOnInit() {
    if(!this.books.length) this.message = 'Please enter a search term.';
  }

  searchBook(term: string): void {
    this.bookService.getBooks(term).subscribe(books => {
      console.log(books);
      this.message = '';
    });
  }

}
