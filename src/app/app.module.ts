import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampusComponent } from './campus/campus.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,CampusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
