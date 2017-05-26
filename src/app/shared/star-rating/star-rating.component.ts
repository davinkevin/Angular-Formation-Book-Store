import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare interface Star {
  filled: boolean;
}

@Component({
  selector: 'bs-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() note: number;
  @Input() max: number;
  @Input() isReadOnly = false;
  @Output() onNoteChange = new EventEmitter<number>();

  stars: Array<Star>;

  ngOnInit() {
    this.updateStars();
  }

  changeNote({note}) {
    if (this.isReadOnly === true) {
      return;
    }

    this.note = note;

    this.updateStars();

    this.onNoteChange.emit(note);
  }

  updateStars() {
    this.stars = [];
    for (let i = 1; i <= this.max; i++) {
      this.stars.push({filled: this.note > i - 1});
    }
  }

}
