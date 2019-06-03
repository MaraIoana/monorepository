import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
let UserManagementGuard = class UserManagementGuard {
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
        return this.hasUserManagement();
    }
    hasUserManagement() {
        if (this.permissions.includes("USER_MANAGEMENT")) {
            return true;
        }
        else {
            return false;
        }
    }
};
UserManagementGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], UserManagementGuard);
export { UserManagementGuard };
//# sourceMappingURL=user-management.guard.js.map