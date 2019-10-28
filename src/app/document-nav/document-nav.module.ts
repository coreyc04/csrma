import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentNavRoutingModule } from './document-nav-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    CommonModule,
    DocumentNavRoutingModule
  ]
})
export class DocumentNavModule { }
