import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserOrofileComponent } from './user-orofile/user-orofile.component';
import { UserAuthntictionGuard } from 'src/app/Guards/user-authntiction.guard';
import { UserSignGuard } from 'src/app/Guards/user-sign.guard';

const routes: Routes = [
  {path:'sign-up',component:SignUpComponent,canActivate:[UserSignGuard]},
  {path:'Login',component:LoginComponent,canActivate:[UserSignGuard]},
  {path:'EditProfile',component:UserOrofileComponent,canActivate:[UserAuthntictionGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
