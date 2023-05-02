import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm:FormGroup = new FormGroup({});
  invalidlogin:boolean=false;
  constructor(private route :Router , private fb:FormBuilder,private user:UserService)
  {
    this.LoginForm=this.fb.group(
      {
        Email:["",Validators.required],
        Password:["",Validators.required]

      }
    );


  }


  get Email()
  {
    return this.LoginForm.get('Email');
  }
  get Password()
  {
    return this.LoginForm.get('Password');
  }



  login()
  {
    const data = this.LoginForm.value;
   return this.user.LoginUser(data).subscribe(
 {

  next:(user)=>{

  console.log(user);
  this.route.navigate(['/Home'])

},
error:(user)=>{
  this.invalidlogin = true;
  console.log(user)
}

}
)
}















}
