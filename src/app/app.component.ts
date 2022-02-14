import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { appAnimations } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[appAnimations]
})
export class AppComponent {

  title = 'Moemen Resume';
  loading:boolean = true;
  @ViewChild('loadingDiv') loadingDivElement: ElementRef;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    // this.fadeOutIntro();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
        outlet.activatedRouteData &&
        outlet.activatedRouteData['appAnimationState'];
}

  fadeOutIntro() {
    setTimeout(() => {
      this.render.setStyle(this.loadingDivElement.nativeElement, "opacity", "0")
      setTimeout(() => {
        this.loading=false
      }, 700)
    }, 6000);
  }
}
