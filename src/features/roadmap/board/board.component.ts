import { Component } from '@angular/core';
import { RoadmapService } from 'src/core/services/roadmap.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styles: [],
})
export class BoardComponent {
  constructor(public roadmapService: RoadmapService) {}
}
