import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
let RoutingErrorComponent = class RoutingErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        document.getElementById("errorMessage").innerHTML = "Thats not cute or something went terribly wrong(maybe permissions)";
        setTimeout(() => {
            this.router.navigateByUrl("/login");
        }, 4000);
    }
};
RoutingErrorComponent = tslib_1.__decorate([
    Component({
        selector: 'app-routing-error',
        templateUrl: './routing-error.component.html',
        styleUrls: ['./routing-error.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], RoutingErrorComponent);
export { RoutingErrorComponent };
//# sourceMappingURL=routing-error.component.js.map