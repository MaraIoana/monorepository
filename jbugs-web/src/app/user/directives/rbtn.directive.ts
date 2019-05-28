import {Role} from "../../models/role.model";
import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";


@Directive({
  selector: '[appRbtn]'
})
export class RbtnDirective implements AfterViewInit {

  @Input() role: Role[];

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    // if (this.role.includes(Role.DELETE_BUG))
    //   this.el.nativeElement.disabled = true;
  }


}
