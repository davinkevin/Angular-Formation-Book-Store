import {Component, OnInit} from '@angular/core';
import {Book} from './shared/book';
import {CommentService, Comment} from './shared/service/comment/comment.service';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  book: Book = {
    title: 'Essential Angular',
    description: 'The book is a short, but at the same time, fairly complete overview of the key aspects of Angular ' +
    'written by its core contributors Victor Savkin and Jeff Cross, who are founders of Nrwl - Angular Consulting ' +
    'for enterprise customers, from core contributors.',
    coverUrl: 'assets/books/essential_angular.jpg'
  };

  comments: Array<Comment> = [];
  newComment: Comment;


  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.resetNewComment();
  }

  private resetNewComment() {
    this.newComment = {login: '', text: ''};
  }

  send() {
    this.commentService
        .save(this.newComment)
        .subscribe(c => {
          this.comments.push(c);
          this.resetNewComment();
        });
  }
}
