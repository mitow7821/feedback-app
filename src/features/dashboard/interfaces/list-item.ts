import { ItemCategory } from 'src/core/enums/item-category';
import { ItemStatus } from 'src/core/enums/item-status';
import { CommentInterface } from 'src/core/interfaces/comment';

export interface ListItemInterface {
  title: string;
  description: string;
  comments: CommentInterface[];
  category: ItemCategory;
  status: ItemStatus;
  upvotes: number;
  id: string;
}
