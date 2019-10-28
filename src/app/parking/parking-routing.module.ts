import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingListComponent } from './parking-list/parking-list.component';

const routes: Routes = [
  {
    path: '',
    component: ParkingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }
