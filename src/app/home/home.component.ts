import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Book Store';

  constructor() { }

  ngOnInit() {
  }

}
