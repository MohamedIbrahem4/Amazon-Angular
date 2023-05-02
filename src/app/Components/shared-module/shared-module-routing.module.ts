import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'**',component:NotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModuleRoutingModule { }
