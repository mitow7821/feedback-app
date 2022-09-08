import { Injectable } from '@angular/core';
import { ItemStatus } from '../enums/item-status';
import { ListItemsService } from './list-items.service';

interface RoadmapStatus {
  name: ItemStatus;
  numberOfItems: number;
  color: string;
}

@Injectable({ providedIn: 'root' })
export class RoadmapService {
  roadmapStatuses: RoadmapStatus[] = [];

  constructor(private listItemService: ListItemsService) {
    this.roadmapStatuses = Object.values(ItemStatus).map((name) => ({
      name,
      numberOfItems: 0,
      items: [],
      color: this.getRandomColor(),
    }));
  }

  get statuses() {
    return this.roadmapStatuses.map((status) => ({
      ...status,
      items: this.getItemsByStatus(status.name),
      numberOfItems: this.getItemsByStatus(status.name).length,
    }));
  }

  private getItemsByStatus(status: ItemStatus) {
    return this.listItemService.presentedItems.filter(
      (item) => item.status === status
    );
  }

  private getRandomColor() {
    return `#${((Math.random() * 0xffffff) << 0)
      .toString(16)
      .padStart(6, '0')}`;
  }
}
