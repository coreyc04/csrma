import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CoffeeOrder {
    id: number;
    coffeeName: string;
    price: number;
    processDifficulty: number;
    customer: string;
    customerSatisfaction: number;
}

@Injectable({
    providedIn: 'root'
})
export class CoffeeOrderService {

    constructor(private http: HttpClient) { }

    getCoffeeOrders(): Observable<CoffeeOrder[]> {
        return this.http.get<CoffeeOrder[]>('api/coffeeOrders')
    }
 
}