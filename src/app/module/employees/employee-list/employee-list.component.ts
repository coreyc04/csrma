import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'csrma-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
    contentHeader: string = "Employees";

    constructor(private ngTitle: Title) { 
        this.ngTitle.setTitle(this.contentHeader);
    }

}
