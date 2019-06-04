import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
let BugManagementGuard = class BugManagementGuard {
    constructor(router) {
        this.router = router;
        //todo Depending on how the session is created, here you should extract permissions from active user
        //todo After that, this Guard should be set in app-routing.module.ts
        if (this.router.getCurrentNavigation().extras.replaceUrl) {
            this.router.navigateByUrl("/error", { state: { message: 'Thats not cute!' } });
        }
        else {
            this.permissions = this.router.getCurrentNavigation().previousNavigation.extras.state.permissions;
        }
    }
    canActivate(next, state) {
        return this.hasBugManagement();
    }
    hasBugManagement() {
        if (this.permissions.includes("BUG_MANAGEMENT")) {
            return true;
        }
        else {
            return false;
        }
    }
};
BugManagementGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], BugManagementGuard);
export { BugManagementGuard };
//# sourceMappingURL=bug-management.guard.js.map