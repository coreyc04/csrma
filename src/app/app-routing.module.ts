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
        loadChildren: () => import('./module/fuel-pumps/fuel-pumps.module').then(m => m.FuelPumpsModule)
    },
    {
        path: 'coffee',
        loadChildren: () => import('./module/coffee/coffee.module').then(m => m.CoffeeModule)
    },
    {
        path: 'parking',
        loadChildren: () => import('./module/parking/parking.module').then(m => m.ParkingModule)
    },
    {
        path: 'employees',
        loadChildren: () => import('./module/employees/employees.module').then(m => m.EmployeesModule)
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
