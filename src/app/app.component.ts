import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { TranslationService } from './Services/translation.service';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'FinalProject';
   langFlag:boolean=true;
  constructor(private translate: TranslateService,
    private translationService: TranslationService
    ) {
    translate.setDefaultLang('en');

    // render(
    //   {
    //       id: "#payments",
    //       currency: "USD",
    //       value: "100.00",
    //       onApprove: (details) => {

    //       }
    //     }
    //   );

  }
  ngOnInit(): void {
    this.translationService.getLanguageObservable().subscribe(language => {
     if(language=='ar'){
      this.langFlag=false;
     }
     else{
      this.langFlag=true;

     }
      // Do translation logic hereeeeeeee
    });

  }

  // switchToArabic() {
  //   this.translate.use('ar');
  //   this.langFlag=false;

  // }
  // switchToEnglish() {
  //   this.translate.use('en');
  //   this.langFlag=true;
  // }
}
