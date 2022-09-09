import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentsComponent, AddCommentComponent],
  imports: [CommonModule, CommentsRoutingModule, ReactiveFormsModule],
  exports: [CommentsComponent],
})
export class CommentsModule {}
