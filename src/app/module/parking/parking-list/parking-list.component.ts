import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'csrma-parking-list',
    templateUrl: './parking-list.component.html',
    styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {
    contentHeader: string = "Parking";

    constructor(private ngTitle: Title) {
        this.ngTitle.setTitle(this.contentHeader);
    }

    ngOnInit() {
    }

}
