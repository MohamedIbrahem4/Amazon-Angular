import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Basket, BasketItem, ShipingMethod, ShipingTotal } from 'src/app/models/basket';
import { Iproduct } from 'src/app/models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basketsource: BehaviorSubject<Basket|null>;
public Basketid:Observable<Basket |null>;
public basketTotalShippingsource :BehaviorSubject<ShipingTotal|null>;
public ShippingTotal :Observable<ShipingTotal|null>;
shipping:number=0;
// basketsource$=this.basketsource.asObservable();
  constructor(private http:HttpClient) {
   this.basketTotalShippingsource=new BehaviorSubject<ShipingTotal|null>(JSON.parse(localStorage.getItem("shipingTotal")!));

    const mybasket =JSON.parse(localStorage.getItem("basket_id")!) as Basket;
    this.basketsource=new BehaviorSubject<Basket|null>(mybasket);
    // this.getCalculateTotals();


   this.ShippingTotal=this.basketTotalShippingsource.asObservable();
  //  this.basketsource=new BehaviorSubject<Basket|null>(null);
  //  (JSON.parse(localStorage.getItem("basket") !))
    this.Basketid=this.basketsource.asObservable();

   }



get GetCurrentBasketValue():Basket|null
{
 return this.basketsource.value;

}
get CurentshipingValue():ShipingTotal|null
{
 return this.basketTotalShippingsource.value;
}




private MappingProductToBasket(item :Iproduct)
{
  return{
    id:item.id,
    name:item.nameEN,
    price:item.price,
    image:item.images,
    itemQuant:item.quantity,
    quantity:0


  }
}
CreateBasket():Basket
{
  const basket =new Basket();
 this.basketsource.next(basket);
 this.getCalculateTotals();
  return basket;
}

UpdateOrAddItem(items :BasketItem[],itemloadded :BasketItem,quantity:number):BasketItem[]|undefined
{


  const item =items?.find(item=>item.id===itemloadded.id);
// if(item!.itemQuant>quantity)
// return ;
  if(item)
  {

    console.log(quantity)
    console.log(item.itemQuant)
    console.log(item.quantity)

     if(item.itemQuant<= item.quantity)
     {
           return;

     }
     else{
          item.quantity +=quantity;

     }


  }
   else
    {

    itemloadded.quantity=quantity;
    items.push(itemloadded);
   }






  return items;
}

AddItemToBasket(item :Iproduct |BasketItem,quantity=1){
  if(this.isproduct(item)) item=this.MappingProductToBasket(item);
  let basket :Basket ;

  if (this.GetCurrentBasketValue )
  {
         basket  =this.GetCurrentBasketValue ;
         basket.items!=this.UpdateOrAddItem(basket.items,item,quantity);
         localStorage.setItem("basket_id",JSON.stringify(basket));
         this.getCalculateTotals();


  }
  else{
    basket =this.CreateBasket();
    basket.items!=this.UpdateOrAddItem(basket.items,item,quantity);
    localStorage.setItem("basket_id",JSON.stringify(basket));
    this.getCalculateTotals();


  }

}
 isproduct(item:Iproduct|BasketItem): item  is Iproduct
 {
  return (item as Iproduct).descriptionEN!==undefined;
 }
 GetShipping(ship :ShipingMethod)
 {

  this.shipping=ship.price;
  this.getCalculateTotals();

 }
//  shippingprice()
//  {
//   if(this.CurentshipingValue ==null)
//   {
//     return this.shipping =0;
//   }
//   else
//   {
//     return this.shipping= this.CurentshipingValue.shipping;
//   }
//  }

getCalculateTotals()
{
  const basket = this.GetCurrentBasketValue;
  if(!basket)return;
  const Subtotal=basket.items.reduce((a,b)=>(b.price*b.quantity)+a,0);
  const total =Subtotal+this.shipping;
  const shipping =this.shipping;
  this.basketTotalShippingsource.next({shipping,total,Subtotal})
  localStorage.setItem("shipingTotal",JSON.stringify(this.CurentshipingValue));

}
removeitemFromBasket(id:number,quantity=1)
{
  const basket =this.GetCurrentBasketValue;
  if(!basket)return;
  const item = basket.items.find(x=>x.id==id);


  if(item)
  {
    item.quantity -=quantity;
    localStorage.setItem("basket_id",JSON.stringify(basket));
    this.getCalculateTotals();


    if(item.quantity===0)
      {
        basket.items=basket.items.filter(x=>x.id!==id);
        localStorage.setItem("basket_id",JSON.stringify(basket));
        this.getCalculateTotals();


      }
      if(basket.items.length<=0)this.deleteBasket();
  }
}



deleteBasket()
{
  localStorage.removeItem("basket_id");
  this.basketsource.next(null);
  this.basketTotalShippingsource.next(null);


}


}
