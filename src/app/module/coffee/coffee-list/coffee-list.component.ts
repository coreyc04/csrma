import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CoffeeOrderService, CoffeeOrder } from '../../../data/service/coffee-orders.service';

@Component({
    selector: 'csrma-coffee-list',
    templateUrl: './coffee-list.component.html',
    styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
    contentHeader: string = "Coffee";
    coffeeOrders: CoffeeOrder[];

    constructor(private ngTitle: Title, private coffeeOrderService: CoffeeOrderService) { 
    }

    ngOnInit() {
        this.ngTitle.setTitle(this.contentHeader);
        this.getCoffeeOrders();
    }

    getCoffeeOrders(): void {
        this.coffeeOrderService.getCoffeeOrders()
            .subscribe(coffeeOrders => this.coffeeOrders = coffeeOrders);
            console.log(this.coffeeOrders);
    }

    // manual check for data load state
    pushInfo(): void {
        console.log(this.coffeeOrders);
    }

}