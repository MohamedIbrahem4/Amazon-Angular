import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
//import{HttpClientModule} from '@angular/common/http';
import { ComparepasswordDirective } from './directives/comparepassword.directive';
import { LayoutModuleModule } from './Components/layout-module/layout-module.module';
import { faJarWheat } from '@fortawesome/free-solid-svg-icons';
import { ProductModuleModule } from './Components/product-module/product-module.module';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComparepasswordDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    HttpClientModule,
    LayoutModuleModule,
  BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    }),
    // JwtModule.forRoot({})


  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
