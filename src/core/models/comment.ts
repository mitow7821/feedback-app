import { ReplyComment } from '../interfaces/comment';

export class Comment {
  name: string;
  tag: string;
  comment: string;
  replies: ReplyComment[];
  id: string;

  constructor(comment: Comment) {
    this.name = comment.name;
    this.tag = comment.tag;
    this.comment = comment.comment;
    this.replies = comment.replies;
    this.id = comment.id;
  }
}
