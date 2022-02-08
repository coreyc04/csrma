import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'csrma-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    contentHeader: string = "Dashboard";
    dateToday: Date = new Date();

    constructor(private ngTitle: Title) {
        this.ngTitle.setTitle("CSRMA - " + this.contentHeader);
    }
}