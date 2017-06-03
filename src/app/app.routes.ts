/**
 * Created by kevin on 26/05/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookDetailsComponent} from './book-details/book-details.component';

export const routes: Routes = [
  { path : '', redirectTo : 'book', pathMatch : 'full'},
  { path : 'book', component: BookDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModules {}
