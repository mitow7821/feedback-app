export interface Comment {
  name: string;
  tag: string;
  comment: string;
  replies: ReplyComment[];
  id: string;
}

export interface ReplyComment extends Comment {
  parentTag: string;
}
