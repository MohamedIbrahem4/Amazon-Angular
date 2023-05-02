import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ConfirmPasswordValidator } from 'src/app/Validateors/confirm-password.validator';

@Component({
  selector: 'app-user-orofile',
  templateUrl: './user-orofile.component.html',
  styleUrls: ['./user-orofile.component.css']
})
export class UserOrofileComponent implements OnInit {
  EditProfile:FormGroup =new FormGroup({});
  userid!:number;
  message!:string;
  message2!:string;
  FirstNamee!: string;
  constructor(private fb :FormBuilder ,private user:UserService){}
  ngOnInit(): void {

    this.EditProfile=this.fb.group({
      InfoForm:this.fb.group({
        id:["",],
        firstName:["",[Validators.required,Validators.minLength(3)]],
        lastName:["",[Validators.required,Validators.minLength(3)]],
        userName:["",[Validators.required,Validators.minLength(3)]],
        email:["",[Validators.required,Validators.minLength(3)]]



      }),
      PaswwordForm:this.fb.group({
        UserName:["",[Validators.required]],
        CurrentPassword:["",[Validators.required]],
        NewPassword:["",[Validators.required]],
        ConfirmNewPassword:["",[Validators.required]]




      },
      {
        validator: ConfirmPasswordValidator("NewPassword", "ConfirmNewPassword")

      }
      )

    }

    )

this.userid=this.user.userValue.id;
this.EditProfile.get('InfoForm')?.get('Id')?.setValue(this.userid);
// this.EditProfile.get('InfoForm')?.patchValue()
this.GetiInfo();

  }

  GetiInfo()
  {

    this.user.GetInfo(this.userid).subscribe({
  next:(info)=>{
   info &&  this.EditProfile.get('InfoForm')?.patchValue(info)


    //  this.FirstNamee=info.FirstName
    console.log( info)
  },
  error:(erro)=>{
    console.log(erro)
  }

})
  }
  Update()
  {this.user.UpdatInfo(this.EditProfile.get('InfoForm')?.value).subscribe({
  next:(edit)=>{
    console.log(edit)

  },
  error:(err)=>{
    console.log(err)
    this.message="You Update your information Sucessfully";

  }
})

  }

  ChgPss(){
    this.user.ChgPass(this.EditProfile.get('PaswwordForm')?.value).subscribe({
      next:(edit)=>{
        console.log(edit.message)

      },
      error:(err)=>{
        console.log(err)
        this.message2="You Password is Changed Sucessfully";

      }

    })
  }

  public get FirstName()
  {
    return this.EditProfile.get('InfoForm')?.get('firstName');
  }
  public get LastName()
  {
    return this.EditProfile.get('InfoForm')?.get('lastName');
  }
  public get UserName()
  {
    return this.EditProfile.get('InfoForm')?.get('userName');
  }
  public get Email()
  {
    return this.EditProfile.get('InfoForm')?.get('email');
  }


  /////////////////////
  public get UserName2()
  {
    return this.EditProfile.get('PaswwordForm')?.get('UserName');
  }
  public get CurrentPassword()
  {
    return this.EditProfile.get('PaswwordForm')?.get('CurrentPassword');
  }
  public get NewPassword()
  {
    return this.EditProfile.get('PaswwordForm')?.get('NewPassword');
  }
  public get ConfirmNewPassword()
  {
    return this.EditProfile.get('PaswwordForm')?.get('ConfirmNewPassword');
  }


}
