import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
    data: { animationState: 'portfolio' },
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
    data: { animationState: 'signin' },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
