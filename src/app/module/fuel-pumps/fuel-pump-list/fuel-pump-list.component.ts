import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'csrma-fuel-pump-list',
  templateUrl: './fuel-pump-list.component.html',
  styleUrls: ['./fuel-pump-list.component.css']
})
export class FuelPumpListComponent implements OnInit {
    contentHeader: string = "Fuel Pumps";

  constructor(private ngTitle: Title) {
      this.ngTitle.setTitle(this.contentHeader);
   }

  ngOnInit() {
  }

}
