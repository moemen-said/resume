import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./store-part/store-part.module').then(m => m.StorePartModule),
  //   data: { animationState: 'store' }
  // },
  // {
  //   path: 'Account',
  //   loadChildren: () => import('./store-part/auth/auth.module').then(m => m.AuthModule),
  //   data: { animationState: 'signin' }
  // },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
