import { CommentInterface, ReplyInterface } from '../interfaces/comment';
import { ReplyModel } from './reply';

export class CommentModel {
  name: string;
  tag: string;
  comment: string;
  replies: ReplyModel[];
  id: string;
  img: string;

  constructor(comment: CommentInterface) {
    this.name = comment.name;
    this.tag = comment.tag;
    this.comment = comment.comment;
    this.replies = comment.replies.map((e) => new ReplyModel(e));
    this.id = comment.id;
    this.img = comment.img;
  }

  public addReply(reply: ReplyInterface) {
    this.replies.push(new ReplyModel(reply));
  }
}
