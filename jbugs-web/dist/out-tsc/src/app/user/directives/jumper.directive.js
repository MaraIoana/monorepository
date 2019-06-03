import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
let JumperDirective = class JumperDirective {
    constructor(el) {
        this.el = el;
        this.position = 'left';
    }
    onMouseEnter() {
        this.togglePosition();
    }
    togglePosition() {
        if (this.position === 'left') {
            this.el.nativeElement.style.float = 'left';
            this.position = 'right';
        }
        else {
            this.el.nativeElement.style.float = 'right';
            this.position = 'left';
        }
    }
};
tslib_1.__decorate([
    HostListener('mouseenter'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], JumperDirective.prototype, "onMouseEnter", null);
JumperDirective = tslib_1.__decorate([
    Directive({
        selector: '[appJumper]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], JumperDirective);
export { JumperDirective };
//# sourceMappingURL=jumper.directive.js.map