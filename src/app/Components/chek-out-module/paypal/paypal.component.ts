import { Component, Injectable, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { PaymentComponent } from '../payment/payment.component';
import { AdressComponent } from '../adress/adress.component';
import { ShipingMethodComponent } from '../shiping-method/shiping-method.component';
import { BasketService } from '../../basket-module/services/basket.service';
import { ChekoutServicesService } from '../services/chekout-services.service';
import { UserService } from '../../user/services/user.service';
import { Router } from '@angular/router';
import { CreatOrder, itemCart } from 'src/app/models/check-out';
import { BasketItem } from 'src/app/models/basket';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  ischecked:boolean=false;
  constructor(private adressId:AdressComponent,private shipId:ShipingMethodComponent, private basket:BasketService ,private Check:ChekoutServicesService,private user:UserService,private route :Router){

  }
  ngOnInit(): void {

    render(
      {
          id: "#payments",
          currency: "USD",
          value: `${this.basket.CurentshipingValue?.total}`,

          onApprove: (details) => {
            console.log(details)
            this.ischecked=true;

          },




        }
      );

  }
  MapingItemForOrder(item :BasketItem[]):itemCart[]
  {
    let i:itemCart[]=[];


    for (const itemOrder of item) {
      let x:itemCart={
        productId: itemOrder.id,
        Price: itemOrder.price *itemOrder.quantity,
        Quantity: itemOrder.quantity
      }
    i.push(x);


      }


    console.log(i)
    return  i;

  }

  CreatOrder()
  {
    let Order :CreatOrder={
      total: 0,
      shoppingmethodId: 0,
      addressId: 0,
      userId: 0,
      ItemsOfProductListCart: []
    };
    let itemCart :itemCart[]=[];
    const AdressId= this.adressId.adressvalue.id;
    console.log(this.shipId.Shiping.id)
    const ShipingId =this.shipId.Shiping.id;
    const Total =this.basket.CurentshipingValue?.total;
    const basketid =this.basket.GetCurrentBasketValue?.items;
    const User =this.user.userValue.id;

    if(basketid)
    {
        itemCart = this.MapingItemForOrder(basketid);
    }
    if(itemCart&&AdressId&&ShipingId&&Total)
    {
     Order.ItemsOfProductListCart=itemCart;
     Order.addressId=AdressId;
     Order.shoppingmethodId=ShipingId;
     Order.total=Total;
     Order.userId=User;
    }

  this.Check.CreateOrder(Order).subscribe({
    next:(order)=>{
      localStorage.removeItem("basket_id");
      localStorage.removeItem("shipingTotal");
      this.basket.basketsource.next(null);
      this.basket.basketTotalShippingsource.next(null);
      this.route.navigate(["OrderConfirmed"])


    },
    error:(err)=>{console.log(err);}
  })

  }
  // SubmitOrder()
  // {
  //   this.pay.CreatOrder();
  // }

}
