import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects.routing';
import { ProjectViewerComponent } from './projects.component';
import { Directory1Component } from './directory1/directory1.component';

@NgModule({
  declarations: [ProjectViewerComponent, Directory1Component],
  imports: [ProjectsRoutingModule],
  exports: [],
})
export class ProjectsModule {}
