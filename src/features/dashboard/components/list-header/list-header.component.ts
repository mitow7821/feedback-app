import { Component, OnInit } from '@angular/core';
import { AllCategory, ItemCategory } from 'src/core/enums/item-category';
import { ItemStatus } from 'src/core/enums/item-status';
import { ListItemsService } from 'src/core/services/list-items.service';
import { ItemCategoryService } from '../../services/item-category.service';

@Component({
  selector: 'list-header',
  templateUrl: './list-header.component.html',
})
export class ListHeaderComponent implements OnInit {
  constructor(
    private listItemsService: ListItemsService,
    private itemCategoryService: ItemCategoryService
  ) {}

  get numberOfItems() {
    return this.listItemsService.presentedItems.length;
  }

  addItem() {
    this.listItemsService.addItem({
      title: 'Random title',
      descripton:
        'Lorem ipsum dolor sit 132 sds sdi2e238 da ios2 s2n bks2uiyvsajf sg 2',
      category:
        this.itemCategoryService.selectedCategory !== AllCategory.ALL
          ? this.itemCategoryService.selectedCategory
          : ItemCategory.FEATURE,
      comments: [],
      status: ItemStatus.PLANNED,
      upvotes: 0,
    });
  }

  ngOnInit(): void {}
}
