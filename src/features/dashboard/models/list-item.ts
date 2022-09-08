import { ItemCategory } from 'src/core/enums/item-category';
import { ItemStatus } from 'src/core/enums/item-status';
import { Comment } from 'src/core/models/comment';
import { ListItemInterface } from '../interfaces/list-item';

export class ListItem {
  public title: string;
  public descripton: string;
  public comments: Comment[];
  public category: ItemCategory;
  public status: ItemStatus;
  public upvotes: number;

  constructor(listItem: ListItemInterface) {
    this.title = listItem.title;
    this.descripton = listItem.descripton;
    this.comments = listItem.comments;
    this.category = listItem.category;
    this.status = listItem.status;
    this.upvotes = listItem.upvotes;
  }
}
