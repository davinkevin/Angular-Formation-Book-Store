/**
 * Created by kevin on 26/05/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {BooksResolver} from './shared/resolver/books/books.resolver';
import {BookResolver} from './shared/resolver/book/book.resolver';
import {BookCommentsResolver} from './shared/resolver/book-comments/book-comments.resolver';

export const routes: Routes = [
  {
    path : '', component: BooksComponent,
    resolve: {
      books: BooksResolver
    }
  },
  {
    path : ':id', component: BookDetailsComponent,
    resolve: {
      book: BookResolver,
      comments: BookCommentsResolver
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BooksRoutesModule { }
