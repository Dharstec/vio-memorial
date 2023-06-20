import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { CommonModule, TitleCasePipe } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampusComponent } from './campus/campus.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AdmissionComponent } from './admission/admission.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule}  from './angular-material/angular-material.module';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,HomeComponent,CampusComponent, BlogComponent, AdmissionComponent, CurriculumComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,NgImageSliderModule, BrowserAnimationsModule,
    AngularMaterialModule,
    CommonModule,
    TitleCasePipe,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
