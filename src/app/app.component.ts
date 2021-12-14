import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moemen Resume';

  @ViewChild('loadingDiv') loadingDivElement: ElementRef;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.fadeOutIntro();
  }

  fadeOutIntro() {
    setTimeout(() => {
      this.render.setStyle(this.loadingDivElement.nativeElement, "opacity", "0")
      setTimeout(() => {
        this.render.setStyle(this.loadingDivElement.nativeElement, "display", "none")
      }, 500)
    }, 6000);
  }
}
