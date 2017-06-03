import {NgModule} from '@angular/core';
import {BookDetailsComponent} from './book-details/book-details.component';
import {StarRatingComponent} from './shared/star-rating/star-rating.component';
import {BooksComponent} from './books.component';
import {HttpModule} from '@angular/http';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookService} from './shared/service/book/book.service';
import {CommentService} from './shared/service/comment/comment.service';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {BooksRoutesModule} from './books.routes';

@NgModule({
  declarations: [
    BookDetailsComponent,
    StarRatingComponent,
    BooksComponent
  ],
  imports: [
    CommonModule, HttpModule,
    FormsModule, ReactiveFormsModule,
    SharedModule, BooksRoutesModule
  ],
  providers: [
    FormBuilder,
    BookService,
    CommentService
  ]
})
export class BooksModule { }
