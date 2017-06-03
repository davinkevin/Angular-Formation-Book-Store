import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CommentService} from './shared/service/comment/comment.service';
import { IsLoadingComponent } from './shared/is-loading/is-loading.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import {AppRoutesModules} from './app.routes';
import {BookDetailsComponent} from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailsComponent,
    IsLoadingComponent,
    StarRatingComponent,
    HomeComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    FormsModule, ReactiveFormsModule,
    AppRoutesModules
  ],
  providers: [
      FormBuilder,
      CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
