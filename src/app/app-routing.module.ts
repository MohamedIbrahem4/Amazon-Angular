import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { IndexComponent } from './Components/product-module/index/index.component';
import { UserAuthntictionGuard } from './Guards/user-authntiction.guard';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'',component:MainComponent,children:[

  {
      path: '',
      loadChildren: () => import('./Components/product-module/product-module.module').then(m => m.ProductModuleModule)
    },
    {
      path: '',
      loadChildren: () => import('./Components/basket-module/basket-module.module').then(m => m.BasketModuleModule)
    },
    {
      path: '',
      loadChildren: () => import('./Components/chek-out-module/chek-out-module.module').then(m => m.ChekOutModuleModule ),canActivate:[UserAuthntictionGuard]
    },



  ]},


    {
      path: 'user',
      loadChildren: () => import('./Components/user/user.module').then(m => m.UserModule)
    },

    {
      path: '',
      loadChildren: () => import('./Components/shared-module/shared-module.module').then(m => m.SharedModuleModule)
    },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
