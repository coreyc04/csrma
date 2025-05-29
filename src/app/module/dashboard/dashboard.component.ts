import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'csrma-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    contentHeader: string = "Dashboard";
    dateTimeNow: Date = new Date();

    constructor(private ngTitle: Title) {
        this.ngTitle.setTitle("CSRMA - " + this.contentHeader);
    }

    // TODO:
    // Allow dateNow to dynamically update time/clock per second for valid time/clock in the view.
    // Format would be HH:mm:ss


}