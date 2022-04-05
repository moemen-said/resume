import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';

import { DirectoryComponent } from './directory/directory.component';
import { MedkitComponent } from './medkit/medkit.component';
import { ProjectViewerComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectViewerComponent,
    children: [
      { path: 'directory', component: DirectoryComponent },
      { path: 'medkit', component: MedkitComponent },
      { path: 'bookmark', component: BookmarkComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
