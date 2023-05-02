import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/check-out';
import { ChekoutServicesService } from '../services/chekout-services.service';
import { UserService } from '../../user/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent implements OnInit{
  OrderDetails:Order[]=[];
  userId!: number;
  name!:string;

  constructor(private GetOrder:ChekoutServicesService ,private user :UserService, private route :Router){}
  ngOnInit(): void {
    if(localStorage.getItem("user"))
  this.userId= this.user.userValue.id;


    this.GetOrder.AllOrder(this.userId).subscribe({
      next:(order)=>{
        this.OrderDetails=order;
        console.log(order)
      },
      error:(erorr)=>{
        console.log(erorr)
      }

    })

    if(localStorage.getItem("user"))
    this.name= this.user.userValue.username;
  }




 OderId(id:number)
 {
  this.route.navigate(["OrderDetials",id])

 }



}
