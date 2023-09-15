import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultLayoutComponent } from './default-layout/default-layout/default-layout.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AcademicComponent } from './components/academic/academic.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TransformationComponent } from './components/transformation/transformation.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    AboutMeComponent,
    AcademicComponent,
    ExperienceComponent,
    TransformationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
