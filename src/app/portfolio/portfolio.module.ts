import { NgModule } from '@angular/core';

import { PortfolioRoutingModule } from './portfolio.routing';
import { PortfolioComponent } from './portfolio.component';
import { NavComponent } from './nav/nav.component';
import { MainDataComponent } from './main-data/main-data.component';
import { AboutComponent } from './router-component/about/about.component';
import { ContactComponent } from './router-component/contact/contact.component';
import { ProjectsComponent } from './router-component/projects/projects.component';
import { ResumeComponent } from './router-component/resume/resume.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    MainDataComponent,
    NavComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [PortfolioRoutingModule],
  exports: [],
})
export class PortfolioModule {}
