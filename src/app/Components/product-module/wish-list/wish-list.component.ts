import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from '../services/product.service';
import { BasketService } from '../../basket-module/services/basket.service';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/Services/translation.service';
import { WishListService } from 'src/app/Services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  Allproduct: Iproduct[] = [];
  ProductBasket!: Iproduct;

  totalLength: any;
  page: number = 1;

  public currentLanguage: string = '';

  wishListIds: number[] = []

  constructor(private Productservice: ProductService,
    private basket: BasketService,
    private route: Router,
    private translationService: TranslationService,
    private wishListService: WishListService
  ) {

  }
  ngOnInit(): void {

   this.getAllProducts();
    this.translationService.getLanguageObservable().subscribe(language => {
      this.currentLanguage = language;
      // Do translation logic hereeeeeeee
    });

    // this.AddProductToBasket()

    ////////////////////////
    // this.basket.AddItemToBasket()
  }

  getAllProducts()
  {
    this.Productservice.GetallProduct().subscribe(
      {
        next: (pro) => {
          //let LocalProductIds=JSON.parse(localStorage.getItem("Wishlist") as any)
          let LocalProductIds = localStorage.getItem("Wishlist") as any
          let LocalProductIds1 = JSON.parse(localStorage['Wishlist']) as number[]



console.log(LocalProductIds1);


          // let x = pro.filter(function (e) {
          //   console.log(e);
          //   LocalProductIds1.includes(e.id)
          // });
          // console.log("pro= " + x);
          // this.Allproduct = x;

          var result=pro.filter(function(e){let w=JSON.parse(localStorage['Wishlist']);return w.includes(e.id)})
           console.log("pro= " + result);
           this.Allproduct = result
          this.totalLength = pro.length;
        }
        ,

        error: (err) => console.log(err)

      }

    );
  }
  AddProductToBasket(item: Iproduct) {
    this.basket.AddItemToBasket(item);

  }

  VeiwProduct(id: number) {
    this.route.navigate(["ProductDetails", id])

  }

  // @ViewChild('icon') icon: ElementRef|undefined=undefined;
  AddProductToWishList(id: number) {
    this.wishListService.AddProductToWishList(id);
    this.getAllProducts();
  }

}
