import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from "@angular/core";
let RbtnDirective = class RbtnDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        // if (this.role.includes(Role.DELETE_BUG))
        //   this.el.nativeElement.disabled = true;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], RbtnDirective.prototype, "role", void 0);
RbtnDirective = tslib_1.__decorate([
    Directive({
        selector: '[appRbtn]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], RbtnDirective);
export { RbtnDirective };
//# sourceMappingURL=rbtn.directive.js.map