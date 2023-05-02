import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Iproduct } from 'src/app/models/iproduct';
import { BasketService } from '../../basket-module/services/basket.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route :ActivatedRoute ,private product:ProductService,private routee:Router,private basket:BasketService){}
  searchname!:string;
  Allproduct:Iproduct[]=[];
  totalLength:any;
  page:number=1;
  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.searchname=params['query'];
      this.product.Searchbar(this.searchname).subscribe({
        next:(pro)=>{
          this.Allproduct=pro

        }
      })

    })
  }
  AddProductToBasket(item :Iproduct)
  {
    this.basket.AddItemToBasket(item)
  }

  VeiwProduct(id :number)
  {
    this.routee.navigate(["ProductDetails",id])

  }

}
