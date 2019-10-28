import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelPumpsRoutingModule } from './fuel-pumps-routing.module';
import { FuelPumpListComponent } from './fuel-pump-list/fuel-pump-list.component';

@NgModule({
  declarations: [FuelPumpListComponent],
  imports: [
    CommonModule,
    FuelPumpsRoutingModule
  ]
})
export class FuelPumpsModule { 
}
