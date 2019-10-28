import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { OrderComponent } from './order/order.component';
import { CsrmaWebStorageService } from '../shared/web-storage.service';
import { WAlert } from './wAlert.directive';

@NgModule({
  declarations: [CoffeeListComponent, OrderComponent, WAlert],
  imports: [
    CommonModule,
    HttpClientModule,
    CoffeeRoutingModule
  ],
  providers: [
    CsrmaWebStorageService
  ]
})
export class CoffeeModule { }
