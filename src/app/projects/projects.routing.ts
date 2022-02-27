import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoryComponent } from './directory/directory.component';
import { ProjectViewerComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectViewerComponent,
    children: [
      { path: 'directory', component: DirectoryComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
