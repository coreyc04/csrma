import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

const FuelPumpStatus = {
    IN_USE: 'In Use',
    AVAILABLE: 'Available',
    UNAVAILABLE: 'Unavailable',
};

// Fake data for fuel pumps.
// TODO:
// This needs to be replaced with a real service call to fetch fuel pump data.
const FUEL_PUMPS: FuelPump[] = [
    { id: 1, name: 'Pump A', location: 'North Station', fuelType: 'Unleaded', pricePerGallon: 3.29, operationalStatus: FuelPumpStatus.IN_USE },
    { id: 2, name: 'Pump B', location: 'South Station', fuelType: 'Diesel', pricePerGallon: 3.49, operationalStatus: FuelPumpStatus.AVAILABLE },
    { id: 3, name: 'Pump C', location: 'East Station', fuelType: 'Premium', pricePerGallon: 3.79, operationalStatus: FuelPumpStatus.UNAVAILABLE },
    { id: 4, name: 'Pump D', location: 'West Station', fuelType: 'Unleaded', pricePerGallon: 3.29, operationalStatus: FuelPumpStatus.IN_USE },
    { id: 5, name: 'Pump E', location: 'Central Station', fuelType: 'Diesel', pricePerGallon: 3.49, operationalStatus: FuelPumpStatus.AVAILABLE },
    { id: 6, name: 'Pump F', location: 'North Station', fuelType: 'Premium', pricePerGallon: 3.79, operationalStatus: FuelPumpStatus.UNAVAILABLE }
];

class FuelPump {
    id: number;
    name: string;
    location: string;
    fuelType: string;
    pricePerGallon: number;
    operationalStatus: string;
}

@Component({
  selector: 'csrma-fuel-pump-list',
  templateUrl: './fuel-pump-list.component.html',
  styleUrls: ['./fuel-pump-list.component.css']
})
export class FuelPumpListComponent implements OnInit {
    contentHeader: string = "Fuel Pumps";
    fuelPumps: FuelPump[] = [];

    constructor(private ngTitle: Title) {
        this.ngTitle.setTitle(this.contentHeader);
    }

    ngOnInit() {
        this.fuelPumps = FUEL_PUMPS;
    }

    getFuelPumpStatusClass(status: string): string {
        switch (status) {
            case FuelPumpStatus.IN_USE:
                return 'text-warning';
            case FuelPumpStatus.AVAILABLE:
                return 'text-success';
            case FuelPumpStatus.UNAVAILABLE:
                return 'text-danger';
            default:
                return '';
        }
    }
}