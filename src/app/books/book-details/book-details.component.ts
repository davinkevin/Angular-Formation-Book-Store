import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentService, Comment} from '../shared/service/comment/comment.service';
import {Book, BookService} from '../shared/service/book/book.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'bs-root',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  comments: Array<Comment> = [];

  form: FormGroup;
  isLoading = false;
  maxNote = 10;

  constructor(
      private bookService: BookService,
      private commentService: CommentService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params
        .map(p => +p.id)
        .switchMap(id => this.bookService.findOne(id))
        .subscribe(b => this.book = b);

    this.route.params
        .map(p => +p.id)
        .switchMap(id => this.commentService.findByBook(id))
        .subscribe(c => this.comments = c);

    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      text: ['', Validators.required],
      note: [5, Validators.required]
    });
  }

  send() {
    this.isLoading = true;
    this.commentService
        .save(this.form.value, this.book)
        .subscribe(
            c => this.comments.push(c),
            () => this.isLoading = false,
            () => {
              this.isLoading = false;
              this.form.reset({login: '', text: '', note: 5});
            }
        );
  }
}
