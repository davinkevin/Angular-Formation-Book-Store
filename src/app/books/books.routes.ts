/**
 * Created by kevin on 26/05/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './books.component';
import {BookDetailsComponent} from './book-details/book-details.component';

export const routes: Routes = [
  { path : 'books', component: BooksComponent },
  { path : 'books/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BooksRoutesModule { }
