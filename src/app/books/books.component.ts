import {Component, OnInit} from '@angular/core';
import {Book, BookService} from './shared/service/book/book.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'bs-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Array<Book>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data
        .map(d => d.books)
        .subscribe(b => this.books = b);
  }

}
