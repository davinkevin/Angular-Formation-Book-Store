import {Component, OnInit} from '@angular/core';
import {Book, BookService} from './shared/service/book/book.service';

@Component({
  selector: 'bs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Array<Book>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService
        .findAll()
        .subscribe(b => this.books = b);
  }

}
