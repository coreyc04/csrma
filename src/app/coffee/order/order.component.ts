import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderQuantity: number;

  constructor(private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
 //   this.route.params.subscribe(count => this.orderQuantity = count.params);
    // this.orderQuantity = this.route.snapshot.params.get('count');
    // console.log("Order Quantity is " + this.orderQuantity);
    this.route.paramMap.subscribe(paramMap => {
      // paramMap get() returns a string
      // use Number(...) to cast per TypeScript
      this.orderQuantity = Number(paramMap.get('count'));
    });

  }

  printOrderSelectionInfo(): string {
    if (this.orderQuantity === 1) {
      return "You have selected " + this.orderQuantity + " coffee unit for your order!";
    } else {
      return "You have selected " + this.orderQuantity + " coffee units for your order!";
    }
  }

}