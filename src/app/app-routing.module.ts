import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/features/dashboard/dashboard.component';
import { DashboardModule } from 'src/features/dashboard/dashboard.module';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'roadmap',
    loadChildren: () =>
      import('src/features/roadmap/roadmap.module').then(
        (m) => m.RoadmapModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/features/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('src/features/comments/comments.module').then(
        (m) => m.CommentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
