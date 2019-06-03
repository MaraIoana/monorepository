import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
let PermManagementGuard = class PermManagementGuard {
    constructor(router) {
        this.router = router;
        if (this.router.getCurrentNavigation().extras.replaceUrl) {
            this.router.navigateByUrl("/error", { state: { message: 'Thats not cute!' } });
        }
        else {
            this.permissions = this.router.getCurrentNavigation().previousNavigation.extras.state.permissions;
        }
    }
    canActivate(next, state) {
        return this.hasPermissionManagement();
    }
    hasPermissionManagement() {
        if (this.permissions.includes("PERMISSION_MANAGEMENT")) {
            return true;
        }
        else {
            return false;
        }
    }
};
PermManagementGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], PermManagementGuard);
export { PermManagementGuard };
//# sourceMappingURL=perm-management.guard.js.map