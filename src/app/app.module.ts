import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampusComponent } from './campus/campus.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AdmissionComponent } from './admission/admission.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule}  from './angular-material/angular-material.module'

@NgModule({
  declarations: [
    AppComponent,HomeComponent,CampusComponent, BlogComponent, AdmissionComponent, CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,NgImageSliderModule, BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
