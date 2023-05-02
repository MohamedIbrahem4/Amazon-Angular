import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserRoutingModule } from './user-routing.module';
// import { FormGroup, FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LayoutModuleModule } from '../layout-module/layout-module.module';
import { UserOrofileComponent } from './user-orofile/user-orofile.component';



@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent,
    UserOrofileComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModuleModule

    // FormsModule,
    // ReactiveFormsModule,

  ]


})
export class UserModule { }
