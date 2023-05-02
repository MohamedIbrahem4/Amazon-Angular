import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Icategory, Iprand, Iproduct, IproductDetails } from 'src/app/models/iproduct';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ProductService   {
  httpOptions={};
  constructor(private http :HttpClient ,private route:Router)
   {
    const httpOptions ={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
   }


GetallProduct():Observable<Iproduct[]>
{
  return this.http.get<Iproduct[]>(`${environment.APIURL}/api/Product/AllProduct`);

}
GetProductById(productid:any):Observable<Iproduct>
{
  return this.http.get<Iproduct>(`${environment.APIURL}/api/Product/${productid}`);

}
GetallProductByCategory(id:number):Observable<Iproduct[]>
{
  return this.http.get<Iproduct[]>(`${environment.APIURL}/api/Product/AllProduct?categoryId=${id}`);

}
GetallProductByBrand(id:number):Observable<Iproduct[]>
{
  return this.http.get<Iproduct[]>(`${environment.APIURL}/api/Product/AllProduct?brandId=${id}`);

}

Searchbar(name:string):Observable<Iproduct[]>
{
  return this.http.get<Iproduct[]>(`${environment.APIURL}/api/Product/AllProduct?filter=${name}`);

}






//////////////////filter by category///////////////////////////
GetAllCategory():Observable<Icategory[]>
{

  return this.http.get<Icategory[]>(` ${environment.APIURL}/api/Category/GetAllCategory`,this.httpOptions);
}

GetAllBrand():Observable<Iprand[]>
{
return this.http.get<Iprand[]>(`${environment.APIURL}/api/Brand/AllBrands`);
}

}


