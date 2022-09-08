import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadmapComponent } from './roadmap.component';
import { RoadmapRoutingModule } from './roadmap-routing.module';
import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RoadmapComponent,
    HeaderComponent,
    BoardComponent,
    BoardItemComponent,
  ],
  imports: [CommonModule, RoadmapRoutingModule, RouterModule],
})
export class RoadmapModule {}
