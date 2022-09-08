import { Component } from '@angular/core';
import { ItemCategoryService } from '../../services/item-category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  constructor(public itemCategoryService: ItemCategoryService) {}
}
