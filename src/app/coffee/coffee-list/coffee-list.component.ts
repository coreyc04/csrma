import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CsrmaWebStorageService } from '../../shared/web-storage.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  pageTitle: string = 'Coffee';
  filter: string;
  coffee: Coffee[];
  settings: {
    _id: string;
    _rev: string;
    rev: string;
    filter: string;
  }
  testId: string;
  
  constructor(private ngTitle: Title, private csrmaWebStorageService: CsrmaWebStorageService) { }

  ngOnInit() {
//    this.csrmaWebStorageService.getRemote().subscribe(response => {
    this.testId = this.csrmaWebStorageService.getRemote();
//      this.settings = response; 
      console.log(this.testId);
      this.ngTitle.setTitle(this.pageTitle);

 //   })
  }


}

  class Coffee {
    constructor(
      public id: number,
      public name: string,
      public strength: string,
      public countryOfOrigin ?: string
    ){ }
  }

//}