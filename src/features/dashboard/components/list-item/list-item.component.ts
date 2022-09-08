import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ListItem } from '../../interfaces/list-item';
import { ListItem } from '../../models/list-item';

@Component({
  selector: 'list-item [item]',
  inputs: ['item'],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item!: ListItem;
  @Output() upvote = new EventEmitter();

  ngOnInit(): void {
    if (!this.item) {
      throw new Error('@Input() item is required');
    }
  }
}
