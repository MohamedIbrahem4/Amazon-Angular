import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user/services/user.service';
import { render } from 'creditcardpayments/creditCardPayments';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
ChekoutForm:FormGroup=new FormGroup({});
  userid!: number;
  constructor(private fb:FormBuilder,private user:UserService)
  {


  }
  ngOnInit(): void {

    this.ChekoutForm= this.fb.group({
      adressform:this.fb.group({
        UserId:["",],
        AddressEN1:["",[Validators.required]],
        AddressEN2:["",[Validators.required]],
        AddressAR1:["",[Validators.required]],
        AddressAR2:["",[Validators.required]],
        City:["",[Validators.required]],
        UnitNumber:["",[Validators.required]],
        StreetNumber:["",[Validators.required]],
        Region:["",[Validators.required]],
        Country:["",[Validators.required]],
        PostCode:["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],


      }),
      Deleviryform:this.fb.group({
        DelaviryMethod:["",[Validators.required]],

      }),
      Paymentform:this.fb.group({
        NameonCard:["",[Validators.required]],

      })
    })

   this.userid= this.user.userValue.id;
   this.ChekoutForm.get('adressform')?.get('UserId')?.setValue(this.userid);
  }

 public get AddressEN1()
  {
    return this.ChekoutForm.get('adressform')?.get('AddressEN1')
  }
  public get AddressEN2()
  {
    return this.ChekoutForm.get('adressform')?.get('AddressEN2')
  }
  public get AddressAR1()
  {
    return this.ChekoutForm.get('adressform')?.get('AddressAR1')
  }
  public get AddressAR2()
  {
    return this.ChekoutForm.get('adressform')?.get('AddressAR2')
  }
  public get Country()
  {
    return this.ChekoutForm.get('adressform')?.get('Country')
  }
  public get City()
  {
    return this.ChekoutForm.get('adressform')?.get('City')
  }
  public get Region()
  {
    return this.ChekoutForm.get('adressform')?.get('Region')
  }
  public get StreetNumber()
  {
    return this.ChekoutForm.get('adressform')?.get('StreetNumber')
  }
  public get UnitNumber()
  {
    return this.ChekoutForm.get('adressform')?.get('UnitNumber')
  }
  public get PostCode()
  {
    return this.ChekoutForm.get('adressform')?.get('PostCode')
  }



}
