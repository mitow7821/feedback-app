import { Component } from '@angular/core';
import { NavigationService } from 'src/core/services/navigation.service';
import { ListItem } from '../dashboard/models/list-item';
import { ListItemsService } from 'src/core/services/list-items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})
export class CommentsComponent {
  item: ListItem | undefined;

  constructor(
    public navigationService: NavigationService,
    public listItemsService: ListItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.listItemsService.getItem(id, (foundItem) => {
      this.item = foundItem;
    });
  }

  get itemComments() {
    return this.item?.comments ?? [];
  }
}
