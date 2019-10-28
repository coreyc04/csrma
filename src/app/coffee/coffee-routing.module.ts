import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: 'order/:count',
    component: OrderComponent
  },
  {
    path: '',
    component: CoffeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeeRoutingModule { }
