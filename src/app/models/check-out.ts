import { ShipingMethod } from "./basket";
import { Iproduct } from "./iproduct";
import { Adress, user } from "./iuser";

export interface CreatOrder {
  total:number;
  shoppingmethodId:number;
  addressId:number;
  userId:number;
  ItemsOfProductListCart:itemCart[];
}
export interface itemCart{
  productId:number;
  Price:number;
  Quantity:number;
}
export interface Order{
  id:number;
  date:Date;
  total:number;
  status:string;

}
export interface OrderDetails{
  id:number;
  date:Date;
  total:number;
  status:string;
  products:Iproduct[];
  address :Adress;

}

