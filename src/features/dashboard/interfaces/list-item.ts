import { ItemCategory } from 'src/core/enums/item-category';
import { ItemStatus } from 'src/core/enums/item-status';
import { Comment } from 'src/core/models/comment';

export interface ListItemInterface {
  title: string;
  description: string;
  comments: Comment[];
  category: ItemCategory;
  status: ItemStatus;
  upvotes: number;
  id:string
}
