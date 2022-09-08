export class Comment {
  name!: string;
  tag!: string;
  comment!: string;
  replies!: ReplyComment[];
}

class ReplyComment extends Comment {
  parentTag!: string;
}
