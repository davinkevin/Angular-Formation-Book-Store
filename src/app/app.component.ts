import {Component, OnInit} from '@angular/core';
import {Book} from './shared/book';
import {Comment} from './shared/comment';

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

  ngOnInit(): void {
    this.newComment = { login: '', text: '' };
  }

  send() {
    this.newComment.creationDate = new Date();
    this.comments.push(this.newComment);
  }
}
