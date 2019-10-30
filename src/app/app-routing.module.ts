import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'fuel-pumps',
        loadChildren: './module/fuel-pumps/fuel-pumps.module#FuelPumpsModule'
    },
    {
        path: 'coffee',
        loadChildren: './module/coffee/coffee.module#CoffeeModule'
    },
    {
        path: 'parking',
        loadChildren: './module/parking/parking.module#ParkingModule'
    },
    {
        path: 'employees',
        loadChildren: './module/employees/employees.module#EmployeesModule'
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
