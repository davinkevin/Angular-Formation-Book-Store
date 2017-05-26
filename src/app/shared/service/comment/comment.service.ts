import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

export interface Comment {
  login: string;
  text: string;
  creationDate?: Date;
  note: number;
}

@Injectable()
export class CommentService {

  constructor() {}

  save(comment: Comment): Observable<Comment> {
    comment.creationDate = new Date();
    return Observable.of(comment)
        .delay(2000)
        .map(c => Object.assign({}, c));
  }

}
