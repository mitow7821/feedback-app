import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItemModel } from '../../features/dashboard/models/list-item';
import { AllCategory } from 'src/core/enums/item-category';
import { ItemCategoryService } from '../../features/dashboard/services/item-category.service';
import { v4 } from 'uuid';
import { CommentModel } from '../models/comment';
import { faker } from '@faker-js/faker';

@Injectable({ providedIn: 'root' })
export class ListItemsService {
  items = new BehaviorSubject<ListItemModel[]>([]);

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

  public addItem(payload: ListItemModel) {
    this.items.next([new ListItemModel(payload), ...this.items.getValue()]);
  }

  public updateItem(payload: ListItemModel) {
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
          item.id === id
            ? new ListItemModel({ ...item, upvotes: item.upvotes + 1 })
            : item
        )
    );
  }

  public addComment(item: ListItemModel, comment: string) {
    item.addComment({
      img: faker.image.avatar(),
      name: faker.name.fullName(),
      tag: `@${faker.internet.userName()}`,
      comment,
      replies: [],
      id: v4(),
    });

    this.items.next(this.items.getValue());
  }

  public getItem(
    id: string,
    subscriptionCallback: (item: ListItemModel | undefined) => any
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
    return Array.isArray(valueFromStorage)
      ? valueFromStorage.map((e) => new ListItemModel(e))
      : [];
  }
}
