import { Component, OnInit } from '@angular/core';
import { Icategory, Iprand } from 'src/app/models/iproduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  category: Icategory[]=[];
  prand:Iprand[]=[];
  constructor(private data:ProductService){}
  ngOnInit(): void {
    this.data.GetAllCategory().subscribe({
      next:(cat)=>{
        this.category=cat
      }
    })

    this.data.GetAllBrand().subscribe({
      next:(prn)=>{
        this.prand=prn
        console.log(prn)
      }
    })

  }

}
