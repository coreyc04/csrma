import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'parking',
    loadChildren: './parking/parking.module#ParkingModule'
  },
  {
    path: 'fuel-pumps',
    loadChildren: './fuel-pumps/fuel-pumps.module#FuelPumpsModule'
  },
  {
    path: 'coffee',
    loadChildren: './coffee/coffee.module#CoffeeModule'
  },
  {
    path: 'employees',
    loadChildren: './employees/employees.module#EmployeesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
