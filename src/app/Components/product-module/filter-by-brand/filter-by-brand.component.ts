import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from '../../basket-module/services/basket.service';
import { Iproduct } from 'src/app/models/iproduct';
import { TranslationService } from 'src/app/Services/translation.service';
import { WishListService } from 'src/app/Services/wish-list.service';

@Component({
  selector: 'app-filter-by-brand',
  templateUrl: './filter-by-brand.component.html',
  styleUrls: ['./filter-by-brand.component.css']
})
export class FilterByBrandComponent implements OnInit {
  Brandid!: number | null;
  Bran!: number | null;
  totalLength:any;
  page:number=1;

  productByBrand:Iproduct[]=[];

  public currentLanguage: string='';

  constructor(private product:ProductService ,
    private getbrandid:ActivatedRoute ,
    private basket :BasketService ,
    private route :Router,
  private translationService:TranslationService,
  private wishListService: WishListService){
    console.log(this.Brandid)

  }
  ngOnInit(): void {
    this.getbrandid.paramMap.subscribe(
      parammap=>{
       this.Bran=parammap.get('bran')?Number(this.getbrandid.snapshot.paramMap.get('bran')):0;
       if(this.Bran!=null)
    {

   this.product.GetallProductByBrand(this.Bran).subscribe({
    next:(pro)=>{
      this.productByBrand=pro
    }
   })

    }

      }
    )

    this.translationService.getLanguageObservable().subscribe(language => {
      this.currentLanguage = language;
      // Do translation logic hereeeeeeee
    });
     }






  AddProductToBasket(item :Iproduct)
  {
    this.basket.AddItemToBasket(item)
  }

  VeiwProduct(id :number)
  {
    this.route.navigate(["ProductDetails",id])

  }

  AddProductToWishList(id: number) {
    this.wishListService.AddProductToWishList(id);


  }
}
