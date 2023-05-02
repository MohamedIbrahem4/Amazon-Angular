import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModuleModule } from '../layout-module/layout-module.module';
import { BasketModuleRoutingModule } from './basket-module-routing.module';
import { BasketComponent } from './basket/basket.component';
import { HttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketModuleRoutingModule,
    LayoutModuleModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class BasketModuleModule { }
