import { ItemCategory } from 'src/core/enums/item-category';
import { ItemStatus } from 'src/core/enums/item-status';
import { CommentInterface } from 'src/core/interfaces/comment';
import { CommentModel } from 'src/core/models/comment';
import { ListItemInterface } from '../interfaces/list-item';

export class ListItemModel {
  public title: string;
  public description: string;
  public comments: CommentModel[];
  public category: ItemCategory;
  public status: ItemStatus;
  public upvotes: number;
  public id: string;

  constructor(listItem: ListItemInterface) {
    this.title = listItem.title;
    this.description = listItem.description;
    this.comments = listItem.comments.map((e) => new CommentModel(e));
    this.category = listItem.category;
    this.status = listItem.status;
    this.upvotes = listItem.upvotes;
    this.id = listItem.id;
  }

  public addComment(e: CommentInterface) {
    this.comments.unshift(new CommentModel(e));
  }
}
