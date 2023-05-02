import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../basket-module/services/basket.service';
import { Observable } from 'rxjs';
import { Basket } from 'src/app/models/basket';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  basketitem:Observable<Basket |null> | undefined;

  constructor(private basket:BasketService){}
  ngOnInit(): void {
this.basketitem=this.basket.Basketid
  }


}
