import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { MainDataComponent } from './portfolio/main-data/main-data.component';
import { NavComponent } from './portfolio/nav/nav.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ResumeComponent } from './portfolio/resume/resume.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ContactComponent } from './portfolio/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDataComponent,
    NavComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
