import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

export class MockDataService implements InMemoryDbService {
    createDb() {
        const coffeeOrders = [
            { 
                id: 1,
                coffeeName: "Smooth Latte",
                price: 4.29,
                processDifficulty: 3,
                customer: "Jeff B.",
                customerSatisfaction: 5
            },
            {
                id: 2,
                coffeeName: "Pumpkin Spice Frappuccino",
                price: 5.49,
                processDifficulty: 4,
                customer: "Natasha J.",
                customerSatisfaction: 5
            },
            {
                id: 3,
                coffeeName: "Black Coffee",
                price: 2.59,
                processDifficulty: 2,
                customer: "Bill R.",
                customerSatisfaction: 4
            },
            {
                id: 4,
                coffeeName: "Pumpkin Cream Cold Brew",
                price: 4.89,
                processDifficulty: 4,
                customer: "Jenn L.",
                customerSatisfaction: 3
            },
            {
                id: 5,
                coffeeName: "Caramel Frappuccino",
                price: 4.59,
                processDifficulty: 3,
                customer: "Martha S.",
                customerSatisfaction: 5
            },
            {
                id: 6,
                coffeeName: "Caffe Latte",
                price: 4.29,
                processDifficulty: 4,
                customer: "Tim C.",
                customerSatisfaction: 5
            },
            {
                id: 7,
                coffeeName: "Espresso Macchiato",
                price: 5.57,
                processDifficulty: 5,
                customer: "Fran L.",
                customerSatisfaction: 3
            }         
        ];
        return {coffeeOrders};
    }
}