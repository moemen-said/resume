import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Directory1Component } from './directory1/directory1.component';
import { ProjectViewerComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectViewerComponent,
    children: [
      { path: 'firstDirectory', component: Directory1Component }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
