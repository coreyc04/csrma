import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent, SideNavComponent } from './';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        SideNavComponent
    ],
    providers: [],
    exports: [
        HeaderComponent,
        FooterComponent,
        SideNavComponent
    ]
})
export class LayoutsModule { }