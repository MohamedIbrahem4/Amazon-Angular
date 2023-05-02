export interface Iproduct {
  id:number;
  nameEN:string;
  nameAR:string;
  descriptionEN:string;
  descriptionAR:string;
  discountPercentage:number;
  brandNameAR:string;
  brandNameEN:string;
  price:number;
  quantity:number;
  images:string [];
}
export interface IproductDetails {
  id:number;
  nameEN:string;
  nameAR:string;
  descriptionEN:string;
  descriptionAR:string;
  discountPercentage:number;
  brandNameEN:string;
  brandNameAR:string;
  price:number;
  quantity:number;
  images:string [];
}
export interface Icategory {
  id:number;
  nameEN:string;
  nameAR:string;
  imageUrl:string;
}
export interface Iprand {
  id:number;
  nameEN:string;
  nameAR:string;
  imageUrl:string;
}
