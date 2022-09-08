import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/features/dashboard/models/list-item';

@Component({
  selector: 'board-item [item] [color]',
  templateUrl: './board-item.component.html',
})
export class BoardItemComponent implements OnInit {
  @Input() item!: ListItem;
  @Input() color!: string;

  constructor() {}

  ngOnInit(): void {
    if (!this.item) {
      throw new Error('@Input() item is required');
    }

    if (!this.color) {
      throw new Error('@Input() color is required');
    }
  }
}
