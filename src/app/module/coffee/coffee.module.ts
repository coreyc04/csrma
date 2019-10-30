import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoffeeRoutingModule } from './coffee-routing.module';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { OrderComponent } from './order/order.component';
import { NgbdTableSortable } from './table-sortable';

@NgModule({
    declarations: [CoffeeListComponent, OrderComponent, NgbdTableSortable],
    imports: [
        CommonModule,
        HttpClientModule,
        CoffeeRoutingModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoffeeModule { }
