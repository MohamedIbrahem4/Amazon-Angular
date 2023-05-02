import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductService } from '../services/product.service';
import { BasketService } from '../../basket-module/services/basket.service';
import { Route, Router } from '@angular/router';
import { TranslationService } from 'src/app/Services/translation.service';
import { WishListService } from 'src/app/Services/wish-list.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Allproduct: Iproduct[] = [];
  ProductBasket!: Iproduct;
  totalLength: any;
  page: number = 1;
  public currentLanguage: string = '';

  wishListIds: number[] = []

  @Input() product!: Iproduct;
  constructor(private Productservice: ProductService,
    private basket: BasketService,
    private route: Router,
    private translationService: TranslationService,
    private wishListService: WishListService

  ) {

  }
  ngOnInit(): void {
    this.Productservice.GetallProduct().subscribe(
      {
        next: (pro) => {
          this.Allproduct = pro;
          this.totalLength = pro.length;
        }
        ,

        error: (err) => console.log(err)

      }

    );

    this.translationService.getLanguageObservable().subscribe(language => {
      this.currentLanguage = language;
      // Do translation logic hereeeeeeee
    });

    // this.AddProductToBasket()

    ////////////////////////
    // this.basket.AddItemToBasket()
  }



  //  GetProduct(pro:Iproduct)
  //     {
  //        this.ProductBasket=pro;
  //        console.log(pro)
  //     }


  AddProductToBasket(item: Iproduct) {
    this.basket.AddItemToBasket(item)
  }

  VeiwProduct(id: number) {
    this.route.navigate(["ProductDetails", id])

  }

  @ViewChild('icon') icon: ElementRef | undefined = undefined;
  AddProductToWishList(ele:any,id: number) {

console.log(ele.value);

    this.wishListService.AddProductToWishList(id);

    // let iswishlist = localStorage.getItem("Wishlist");
    // if(localStorage.getItem("Wishlist")!=null && JSON.parse(localStorage.getItem("Wishlist") as any).length>0)
    // {
    //   this.wishListIds = JSON.parse(localStorage.getItem("Wishlist") as any)
    // }


    // // if (icon.classList.contains('TogglIconFav'))
    // //     icon.classList.remove('TogglIconFav');
    // // else
    // //     icon.classList.add('TogglIconFav');

    //     ////////////////////////////

    // if (this.wishListIds.includes(id)) {
    //   this.wishListIds.splice(this.wishListIds.indexOf(id),1)
    // }
    // else
    // {
    //   this.wishListIds.push(id);
    // }
    // localStorage.setItem("Wishlist", JSON.stringify(this.wishListIds));

    if (this.wishListService.isFoundInWishlist(id))
      ele.classList.add('bg-warning')
    else
      ele.classList.remove('bg-warning');

  }

}


