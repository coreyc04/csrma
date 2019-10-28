import { Directive, HostListener } from '@angular/core';

@Directive ({ selector: '[wAlert]' })
export class WAlert {

    @HostListener('mouseenter') onMouseEnter() {
        console.log(new Date() + ": Entered!");
        alert("Get ya ehh coffee! - at " + new Date());
    }
}