/**
 * Created by kevin on 26/05/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookDetailsComponent} from './book-details/book-details.component';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';

export const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : 'home', component: HomeComponent },
  { path : 'books', component: BooksComponent },
  { path : 'books/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModules {}
