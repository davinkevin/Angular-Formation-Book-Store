import {NgModule} from '@angular/core';
import {IsLoadingComponent} from './is-loading/is-loading.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [IsLoadingComponent],
  declarations: [IsLoadingComponent]
})
export class SharedModule {}
