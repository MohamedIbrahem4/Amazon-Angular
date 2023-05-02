import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { LayoutModuleModule } from '../layout-module/layout-module.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,

  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule,
    LayoutModuleModule,


  ],

})
export class SharedModuleModule { }
