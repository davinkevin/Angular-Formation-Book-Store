import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {Http} from '@angular/http';
import {Book} from '../book/book.service';

export interface Comment {
  login: string;
  text: string;
  creationDate?: Date;
  note: number;
  bookId?: number;
}

@Injectable()
export class CommentService {

  constructor(private http: Http) {}

  save(comment: Comment, book: Book): Observable<Comment> {
    comment.creationDate = new Date();

    return this.http
        .post(`/api/v1/books/${book.id}/comments`, comment)
        .map(r => r.json());
  }

  findByBook(bookId: number): Observable<Array<Comment>> {
    return this.http
        .get(`/api/v1/books/${bookId}/comments`)
        .map(r => r.json());
  }

}
