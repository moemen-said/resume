import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

import { AboutComponent } from './router-component/about/about.component';
import { ContactComponent } from './router-component/contact/contact.component';
import { ProjectsComponent } from './router-component/projects/projects.component';
import { ResumeComponent } from './router-component/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
        data: { animationState: 'about' },
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { animationState: 'about' },
      },
      {
        path: 'resume',
        component: ResumeComponent,
        data: { animationState: 'resume' },
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: { animationState: 'projects' },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { animationState: 'contact' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
