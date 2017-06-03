/**
 * Created by kevin on 03/06/2017.
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Comment, CommentService} from '../../service/comment/comment.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class BookCommentsResolver implements Resolve<Array<Comment>> {

    constructor(private commentService: CommentService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Comment>> {
        return this.commentService.findByBook(route.params.id);
    }

}
