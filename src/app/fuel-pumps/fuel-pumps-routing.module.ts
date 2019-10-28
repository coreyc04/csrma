import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuelPumpListComponent } from './fuel-pump-list/fuel-pump-list.component';

const routes: Routes = [
  {
    path: '',
    component: FuelPumpListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelPumpsRoutingModule { }
