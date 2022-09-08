import { Injectable } from '@angular/core';
import {
  SidebarCategories,
  AllCategory,
  ItemCategory,
} from 'src/core/enums/item-category';

@Injectable()
export class ItemCategoryService {
  categories: SidebarCategories[] = [
    AllCategory.ALL,
    ...Object.values(ItemCategory),
  ];
  selectedCategory: SidebarCategories = AllCategory.ALL;

  constructor() {}

  public changeSelectedCategory(category: SidebarCategories) {
    if (this.selectedCategory === category) {
      return;
    }

    this.selectedCategory = category;
  }
}
