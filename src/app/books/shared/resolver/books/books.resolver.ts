/**
 * Created by kevin on 03/06/2017.
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Book, BookService} from '../../service/book/book.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class BooksResolver implements Resolve<Array<Book>> {

    constructor(private bookService: BookService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Book>> {
        return this.bookService.findAll();
    }

}
