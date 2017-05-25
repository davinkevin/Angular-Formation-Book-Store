import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CommentService} from './shared/service/comment/comment.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule
  ],
  providers: [
      FormBuilder,
      CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
