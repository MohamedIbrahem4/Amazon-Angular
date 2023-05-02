import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WishListService {
  wishListIds:any[] = [];
  constructor() {
  }
  AddProductToWishList(id :number){

    let iswishlist = localStorage.getItem("Wishlist");
    if(localStorage.getItem("Wishlist")!=null && JSON.parse(localStorage.getItem("Wishlist") as any).length>0)
    {
      this.wishListIds = JSON.parse(localStorage.getItem("Wishlist") as any)
    }
    if (this.wishListIds.includes(id)) {
      this.wishListIds.splice(this.wishListIds.indexOf(id),1)
    }
    else
    {
      this.wishListIds.push(id);
    }
    localStorage.setItem("Wishlist", JSON.stringify(this.wishListIds));

  }

  isFoundInWishlist(id: number):boolean{
    return this.wishListIds.includes(id)
  }
}
