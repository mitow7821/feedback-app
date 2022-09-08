import { Component } from '@angular/core';
import { ItemStatus } from 'src/core/enums/item-status';
import { RoadmapService } from 'src/core/services/roadmap.service';

interface RoadmapStatus {
  name: ItemStatus;
  numberOfItems: number;
  color: string;
}

@Component({
  selector: 'roadmap',
  templateUrl: './roadmap.component.html',
})
export class RoadmapComponent {
  constructor(public roadmapService: RoadmapService) {}
}
