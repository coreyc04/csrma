import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentFooterRoutingModule } from './document-footer-routing.module';
import { BasicFooterComponent } from './basic-footer/basic-footer.component';

@NgModule({
  declarations: [BasicFooterComponent],
  imports: [
    CommonModule,
    DocumentFooterRoutingModule
  ]
})
export class DocumentFooterModule { }
