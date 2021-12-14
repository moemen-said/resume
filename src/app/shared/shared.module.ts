import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    SideNavComponent,
    HeaderComponent,
    LoadingComponent,
  ],
  imports: [
  ],
  exports:[
      SideNavComponent,
      HeaderComponent,
      LoadingComponent,
    ]
})
export class SharedModule { }
