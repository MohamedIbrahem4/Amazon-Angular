import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AllOrderComponent } from './all-order/all-order.component';
import { PaypalComponent } from './paypal/paypal.component';
// import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'CheckOut',component:CheckOutComponent},
  {path:'OrderConfirmed',component:SubmitOrderComponent},
  {path:'OrderDetials/:Ord',component:OrderDetailsComponent},
  {path:'Orders',component:AllOrderComponent},
  {path:'payment',component:PaypalComponent},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChekOutModuleRoutingModule { }
