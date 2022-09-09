import { Component } from '@angular/core';
import { ListItemsService } from 'src/core/services/list-items.service';

@Component({
  selector: 'list-header',
  templateUrl: './list-header.component.html',
})
export class ListHeaderComponent {
  constructor(private listItemsService: ListItemsService) {}

  get numberOfItems() {
    return this.listItemsService.presentedItems.length;
  }
}
