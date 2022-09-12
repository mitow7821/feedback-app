interface CommentBase {
  name: string;
  tag: string;
  comment: string;
  id: string;
  img: string;
}

export interface CommentInterface extends CommentBase {
  replies: ReplyInterface[];
}

export interface ReplyInterface extends CommentBase {
  replyTag: string;
}
