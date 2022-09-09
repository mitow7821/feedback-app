import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItem } from '../../features/dashboard/models/list-item';
import { AllCategory } from 'src/core/enums/item-category';
import { ItemCategoryService } from '../../features/dashboard/services/item-category.service';
import { v4 } from 'uuid';
import { Comment } from '../models/comment';

@Injectable({ providedIn: 'root' })
export class ListItemsService {
  items = new BehaviorSubject<ListItem[]>([]);

  constructor(private itemCategoryService: ItemCategoryService) {
    this.items.next(this.getItems());
    this.items.subscribe((val) => {
      localStorage.setItem('listItems', JSON.stringify(val));
    });
  }

  get presentedItems() {
    return this.items
      .getValue()
      .filter(
        (e) =>
          this.itemCategoryService.selectedCategory === AllCategory.ALL ||
          this.itemCategoryService.selectedCategory === e.category
      );
  }

  public addItem(payload: ListItem) {
    this.items.next([new ListItem(payload), ...this.items.getValue()]);
  }

  public updateItem(payload: ListItem) {
    const items = this.items.getValue();
    const newItems = items.map((e) => (e.id === payload.id ? payload : e));

    this.items.next(newItems);
  }

  public removeItem(id: string) {
    const items = this.items.getValue();
    const newItems = items.filter((e) => e.id !== id);

    this.items.next(newItems);
  }

  public upvote(id: string) {
    this.items.next(
      this.items
        .getValue()
        .map((item) =>
          item.id === id ? { ...item, upvotes: item.upvotes + 1 } : item
        )
    );
  }

  public addComment(item: ListItem, comment: string) {
    const items = this.items.getValue();

    const itemComments = item.comments;
    itemComments.push(
      new Comment({
        name: 'Dawid',
        tag: '@dawid',
        comment,
        replies: [],
        id: v4(),
      })
    );

    const newItemPayload: ListItem = {
      ...item,
      comments: itemComments,
    };

    const newItems = items.map((e) => (e.id === item.id ? newItemPayload : e));

    this.items.next(newItems);
  }

  public getItem(
    id: string,
    subscriptionCallback: (item: ListItem | undefined) => any
  ) {
    return this.items.subscribe((items) => {
      const item = items.find((e) => e.id === id);

      subscriptionCallback(item);
    });
  }

  private getItems() {
    const storage = localStorage.getItem('listItems');

    if (!storage) {
      return [];
    }

    const valueFromStorage = JSON.parse(storage);
    return Array.isArray(valueFromStorage) ? valueFromStorage : [];
  }
}
