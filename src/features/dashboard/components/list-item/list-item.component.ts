import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItemModel } from '../../models/list-item';

@Component({
  selector: 'list-item [item]',
  inputs: ['item'],
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit {
  @Input() item!: ListItemModel;
  @Output() upvote = new EventEmitter();

  ngOnInit(): void {
    if (!this.item) {
      throw new Error('@Input() item is required');
    }
  }
}
