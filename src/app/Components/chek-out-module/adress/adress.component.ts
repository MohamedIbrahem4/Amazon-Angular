import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckOutComponent } from '../check-out/check-out.component';
import { ChekoutServicesService } from '../services/chekout-services.service';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, from } from 'rxjs';
import { Adress } from 'src/app/models/iuser';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {
  @Input() ChekoutForm?: FormGroup;
  message: boolean = false;
  private AdressSubject: BehaviorSubject<Adress>;
  constructor(public adress: CheckOutComponent, private chekout: ChekoutServicesService, private toastr: ToastrService) {
    this.AdressSubject = new BehaviorSubject<Adress>(JSON.parse(localStorage.getItem("Adress_id")!));

  }
  get adressvalue() {
    return this.AdressSubject.value;
  }

  ngOnInit(): void {
    // this.SafeUserAddress();
  }

  SafeUserAddress() {
    this.chekout.AddUserAdress(this.ChekoutForm?.get('adressform')?.value).subscribe({
      next: (form) => {
        this.toastr.success('Your adress is Added');
        localStorage.setItem("Adress_id", JSON.stringify(form))
        this.message = true;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}
