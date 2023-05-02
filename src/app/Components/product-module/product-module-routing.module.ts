import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { IndexComponent } from './index/index.component';
import { FilterByCategoryComponent } from './filter-by-category/filter-by-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterByBrandComponent } from './filter-by-brand/filter-by-brand.component';
import { SearchComponent } from './search/search.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {path:'Products',component:ProductsComponent},
  {path:'Home',component:IndexComponent},
  {path:'ProductDetails/:id',component:ProductDetailsComponent},
  {path:'Category/:cat',component:FilterByCategoryComponent},
  {path:'Brand/:bran',component:FilterByBrandComponent},
  {path:'Search',component:SearchComponent},


  {path:'WishList',component:WishListComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
