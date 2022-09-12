import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommentModel } from 'src/core/models/comment';

interface ReplyEventInterface {
  comment: CommentModel;
  replyTag: string;
}

@Component({
  selector: 'comment [comment]',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  @Input() comment!: CommentModel;
  @Output() replyEvent = new EventEmitter<ReplyEventInterface>();
}
