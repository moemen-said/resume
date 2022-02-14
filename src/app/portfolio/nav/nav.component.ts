import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  aboutSectionTopOffset;
  resumeSectionTopOffset;
  projectsSectionTopOffset;
  contactSectionTopOffset;

  constructor() {}

  ngOnInit(): void {
    this.aboutSectionTopOffset = document.getElementById('about').offsetTop;
    this.resumeSectionTopOffset = document.getElementById('resume').offsetTop;
    this.projectsSectionTopOffset = document.getElementById('projects').offsetTop;
    this.contactSectionTopOffset = document.getElementById('contact').offsetTop;
  }

  scroll(direction) {
    if(direction == 'about'){
      window.scrollTo({ top: this.aboutSectionTopOffset - 55, behavior: 'smooth' });
    }
    else if(direction == 'resume'){
      window.scrollTo({ top: this.resumeSectionTopOffset - 55, behavior: 'smooth' });
    }
    else if(direction == 'projects'){
      window.scrollTo({ top: this.projectsSectionTopOffset - 55, behavior: 'smooth' });
    }
    else if(direction == 'contact'){
      window.scrollTo({ top: this.contactSectionTopOffset - 55, behavior: 'smooth' });
    }
  }
}
