import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DashboardComponent } from './dashboard.component';
import { ItemCategoryService } from './services/item-category.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ListItemComponent,
    ListHeaderComponent,
    RoadmapComponent,
    CategoriesComponent,
    ListViewComponent,
  ],
  providers: [ItemCategoryService, Comment],
  imports: [CommonModule, RouterModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
