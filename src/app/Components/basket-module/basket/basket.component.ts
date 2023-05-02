import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket, BasketItem, ShipingTotal } from 'src/app/models/basket';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
basketitem:Observable<Basket |null> | undefined;
Shippingitem:Observable<ShipingTotal|null>| undefined;
constructor(private basket:BasketService,
){}

ngOnInit(): void {
    this.basketitem=this.basket.Basketid;
    this.Shippingitem=this.basket.ShippingTotal;
  }

  inccrementitem(item:BasketItem)
  {
    this.basket.AddItemToBasket(item);
  }

  removeitem(id:number,quantity:number)
  {
    this.basket.removeitemFromBasket(id,quantity);
  }


loadCart()
{

}

}
