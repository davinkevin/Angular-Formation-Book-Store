import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutesModules} from './app.routes';
import {HomeComponent} from './home/home.component';
import {BooksModule} from './books/books.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
