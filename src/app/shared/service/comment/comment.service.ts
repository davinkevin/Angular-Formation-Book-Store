import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export interface Comment {
  login: string;
  text: string;
  creationDate?: Date;
}

@Injectable()
export class CommentService {

  constructor() {}

  save(comment: Comment): Observable<Comment> {
    comment.creationDate = new Date();
    return Observable.of(comment)
        .map(c => Object.assign({}, c));
  }

}
