import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShipingMethod } from 'src/app/models/basket';
import { ChekoutServicesService } from '../services/chekout-services.service';
import { BasketService } from '../../basket-module/services/basket.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-shiping-method',
  templateUrl: './shiping-method.component.html',
  styleUrls: ['./shiping-method.component.css']
})
export class ShipingMethodComponent implements OnInit {
  @Input() ChekoutForm?: FormGroup;
   AllShiping : ShipingMethod[]=[];
  //  ivaraibe : any=[];

  private ShipingmethodSource : BehaviorSubject<ShipingMethod>;
  constructor(private get:ChekoutServicesService ,private basket :BasketService)
  {
    this.ShipingmethodSource=new BehaviorSubject<ShipingMethod>(JSON.parse(localStorage.getItem("Shiping-id")!));
  }
  get Shiping ()
  {
    return this.ShipingmethodSource.value;
  }
  ngOnInit(): void {

    this.get.GetShippingDetails().subscribe({

      next:(ship)=> {
        this.AllShiping=ship;
        // console.log(this.ivaraibe.result)
       }
      ,

      error:(err)=>console.log(err)

    }
    )


  }

  setshiping(sipmethod :ShipingMethod)
  {
    this.basket.GetShipping(sipmethod)
    // console.log(sipmethod)
    localStorage.setItem("Shiping-id",JSON.stringify(sipmethod))
  }



}
