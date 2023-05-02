import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  ConfirmPasswordValidator } from 'src/app/Validateors/confirm-password.validator';
import { Iuser } from 'src/app/models/iuser';
import { UserService } from 'src/app/Components/user/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  UserF: Iuser ={} as Iuser;
  invalidlogin:boolean=false;
  Uesregx = new  RegExp('([A-zZ-a]){3,50}');

  RegisterForm:FormGroup=new FormGroup({});
  constructor(private User:UserService , private route:Router,private fb:FormBuilder)
  {

   }

  ngOnInit(): void {

    this.RegisterForm=this.fb.group(
      {
        UserName:["",[Validators.required,Validators.pattern("[A-Za-z]{3,50}")]],
        FirstName:["",[Validators.required]],
        LastName:["",[Validators.required]],
        Email:["",[Validators.required]],
        Password:["",[Validators.required]],
        confirmPassword:["",[Validators.required]],


      },
      {
        validator: ConfirmPasswordValidator("Password", "confirmPassword")

      }

    );


    }






  get UserName()
  {
    return this.RegisterForm.get('UserName');
  }
  get FirstName()
  {
    return this.RegisterForm.get('FirstName');
  }
  get LastName()
  {
    return this.RegisterForm.get('LastName');
  }
  get Email()
  {
    return this.RegisterForm.get('Email');
  }
  get Password()
  {
    return this.RegisterForm.get('Password');
  }
  get confirmPassword()
  {
    return this.RegisterForm.get('confirmPassword');
  }



  CreateAccount(){
    const data=this.RegisterForm.value  ;
    // console.log(data);
return this.User.Register(data).subscribe({

    next:(user)=>{
      console.log(user);
      this.route.navigate(["/user/Login"])

    },
    error:(err)=>{
      this.invalidlogin=true;
      console.log(err);
    }
   });
  }


}
