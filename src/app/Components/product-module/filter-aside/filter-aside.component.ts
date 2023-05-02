import { Component, OnChanges, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Icategory, Iprand } from 'src/app/models/iproduct';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/Services/translation.service';

@Component({
  selector: 'app-filter-aside',
  templateUrl: './filter-aside.component.html',
  styleUrls: ['./filter-aside.component.css']
})
export class FilterAsideComponent implements OnInit ,OnChanges {
category:Icategory[]=[];
Brands:Iprand[]=[];

 Catid:Icategory | undefined;
 catid:string="";
 public currentLanguage: string='';

  constructor(private prod:ProductService ,private route :Router,
    private translationService:TranslationService){



}
  ngOnInit(): void {
this.prod.GetAllCategory().subscribe(
  {
    next:(Category:Icategory[])=>{
          this.category=Category;

    },
    error:(err)=>{
      console.log(err)

    }
  }

  );
  this.prod.GetAllBrand().subscribe(
    {
      next:(brand)=>{this.Brands=brand},
      error:(err)=>{console.log(err)}

    }
  )
  this.translationService.getLanguageObservable().subscribe(language => {
    this.currentLanguage = language;
    // Do translation logic hereeeeeeee
  });
  }
  ngOnChanges(): void
  {
    // return this.SendCategoryURL(this.Catid)
  }


SendCategoryURL(cat:string)
{
  this.route.navigate(['Category',cat])
}

SendBrandURL(brand:string)
{
  this.route.navigate(['Brand',brand])
}


}
