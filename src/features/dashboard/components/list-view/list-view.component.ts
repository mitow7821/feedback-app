import { Component } from '@angular/core';
import { ListItemsService } from 'src/core/services/list-items.service';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
})
export class ListViewComponent {
  constructor(public listItemsService: ListItemsService) {}
}
