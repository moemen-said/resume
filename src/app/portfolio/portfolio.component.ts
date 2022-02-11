import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { portfolioAnimations } from './portfolio.animation';

@Component({
  selector: 'portfolio-root',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [portfolioAnimations],
})
export class PortfolioComponent {
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
