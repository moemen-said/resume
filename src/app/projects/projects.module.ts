import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects.routing';
import { ProjectViewerComponent } from './projects.component';
import { DirectoryComponent } from './directory/directory.component';
import { MedkitComponent } from './medkit/medkit.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

@NgModule({
  declarations: [ProjectViewerComponent, DirectoryComponent, MedkitComponent, BookmarkComponent],
  imports: [ProjectsRoutingModule],
  exports: [],
})
export class ProjectsModule {}
