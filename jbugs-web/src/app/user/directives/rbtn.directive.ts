import {Roles} from "../../models/roles.model";
import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";


@Directive({
  selector: '[appRbtn]'
})
export class RbtnDirective implements AfterViewInit {

  @Input() role: Roles[];

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    // if (this.role.includes(Roles.DELETE_BUG))
    //   this.el.nativeElement.disabled = true;
  }


}
