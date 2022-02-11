import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { projectsAnimations } from './projects.animation';

@Component({
  selector: 'projects-root',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [projectsAnimations],
})
export class ProjectViewerComponent {
  constructor() {}

  ngOnInit() {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
}
