import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/observable/of';

export interface Book {
  id: number;
  title: string;
  description: string;
  coverUrl: string;
}

@Injectable()
export class BookService {

  route = '/api/v1/books';

  constructor(private http: Http) { }

  findAll(): Observable<Array<Book>> {
    return this.http
        .get(this.route)
        .map(r => r.json());
  }

  findOne(id: number): Observable<Book> {
    return this.http
        .get(`${this.route}/${id}`)
        .map(r => r.json());
  }

}
