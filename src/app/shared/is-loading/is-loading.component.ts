import {Component, Input} from '@angular/core';

@Component({
  selector: 'bs-is-loading',
  templateUrl: './is-loading.component.html',
  styleUrls: ['./is-loading.component.scss']
})
export class IsLoadingComponent {
  @Input() loading: boolean;
}
