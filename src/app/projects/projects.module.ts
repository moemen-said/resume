import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects.routing';
import { ProjectViewerComponent } from './projects.component';
import { DirectoryComponent } from './directory/directory.component';

@NgModule({
  declarations: [ProjectViewerComponent, DirectoryComponent],
  imports: [ProjectsRoutingModule],
  exports: [],
})
export class ProjectsModule {}
