import { ReplyInterface } from '../interfaces/comment';

export class ReplyModel {
  name: string;
  tag: string;
  comment: string;
  replyTag: string;
  img: string;
  id: string;

  constructor(reply: ReplyInterface) {
    this.name = reply.name;
    this.tag = reply.tag;
    this.comment = reply.comment;
    this.replyTag = reply.replyTag;
    this.img = reply.img;
    this.id = reply.id;
  }
}
