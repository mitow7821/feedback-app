import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListItem } from '../../features/dashboard/models/list-item';
import { AllCategory } from 'src/core/enums/item-category';
import { ItemCategoryService } from '../../features/dashboard/services/item-category.service';

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

  public upvote(index: number) {
    this.items.next(
      this.items
        .getValue()
        .map((item, i) =>
          index === i ? { ...item, upvotes: item.upvotes + 1 } : item
        )
    );
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
