import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipingTotal } from 'src/app/models/basket';
import { BasketService } from '../../basket-module/services/basket.service';

@Component({
  selector: 'app-sumarry-order',
  templateUrl: './sumarry-order.component.html',
  styleUrls: ['./sumarry-order.component.css']
})
export class SumarryOrderComponent implements OnInit{
  Shippingitem:Observable<ShipingTotal|null>| undefined;
constructor(private basket:BasketService)
{

}
  ngOnInit(): void {
    this.Shippingitem=this.basket.ShippingTotal;
  }

}
