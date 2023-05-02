import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { BasketService } from '../../basket-module/services/basket.service';
import { TranslationService } from 'src/app/Services/translation.service';
import { WishListService } from 'src/app/Services/wish-list.service';

@Component({
  selector: 'app-filter-by-category',
  templateUrl: './filter-by-category.component.html',
  styleUrls: ['./filter-by-category.component.css']
})


export class FilterByCategoryComponent implements OnInit {
  Catname: number | null | undefined;
  productByCategory: Iproduct[] = [];
 totalLength:any;
  page:number=1;
  public currentLanguage: string = '';

  constructor(private product: ProductService,
    private GetcatbyRoute: ActivatedRoute,
    private basket: BasketService,
    private route: Router,
    private translationService: TranslationService,
    private wishListService: WishListService) { }
  ngOnInit(): void {
    this.GetcatbyRoute.paramMap.subscribe(
      paramap => {
        this.Catname = paramap.get('cat') ? Number(this.GetcatbyRoute.snapshot.paramMap.get('cat')) : 0;
        if (this.Catname != null) {
          this.product.GetallProductByCategory(this.Catname).subscribe({
            next: (pro) => {
              this.productByCategory = pro
              console.log(pro)

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


  AddProductToBasket(item: Iproduct) {
    this.basket.AddItemToBasket(item)
  }

  VeiwProduct(id: number) {
    this.route.navigate(["ProductDetails", id])

  }

  AddProductToWishList(id: number) {
    this.wishListService.AddProductToWishList(id);


  }

}
