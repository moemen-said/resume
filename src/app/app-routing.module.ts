import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './portfolio/router-component/about/about.component';
import { ContactComponent } from './portfolio/router-component/contact/contact.component';
import { ProjectsComponent } from './portfolio/router-component/projects/projects.component';
import { ResumeComponent } from './portfolio/router-component/resume/resume.component';

const routes: Routes = [
  {path:'',redirectTo:'about',pathMatch:'full',data:{animationState:'about'}},
  {path:'about',component:AboutComponent,data:{animationState:'about'}},
  {path:'resume',component:ResumeComponent,data:{animationState:'resume'}},
  {path:'projects',component:ProjectsComponent,data:{animationState:'projects'}},
  {path:'contact',component:ContactComponent,data:{animationState:'contact'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
