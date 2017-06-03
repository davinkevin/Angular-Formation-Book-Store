import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

declare interface Star {
  filled: boolean;
}

@Component({
  selector: 'bs-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StarRatingComponent),
    multi: true
  }]

})
export class StarRatingComponent implements OnInit, ControlValueAccessor {

  @Input() note: number;
  @Input() max: number;
  @Input() isReadOnly = false;

  stars: Array<Star>;

  private onModelChange: Function;
  private onTouch: Function;

  ngOnInit() {
    if (this.note == null) {
      return;
    }
    this.updateStars();
  }

  changeNote({note}) {
    if (this.isReadOnly === true) {
      return;
    }

    this.note = note;

    this.updateStars();

    this.onModelChange(this.note);
  }

  updateStars() {
    this.stars = [];
    for (let i = 1; i <= this.max; i++) {
      this.stars.push({filled: this.note > i - 1});
    }
  }

  writeValue(note: number): void {
    this.note = note;
    this.updateStars();
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
