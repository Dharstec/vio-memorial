import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'campus', component: CampusComponent },
  { path: 'admission', component: AdmissionComponent },
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'blog', component: BlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
