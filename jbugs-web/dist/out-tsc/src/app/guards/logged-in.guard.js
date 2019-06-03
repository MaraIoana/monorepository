import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
let LoggedInGuard = class LoggedInGuard {
    constructor(router) {
        this.router = router;
        //todo Depending on how the session is created, here you should extract permissions from active user
        //     //todo After that, this Guard should be set in app-routing.module.ts
        if (this.router.getCurrentNavigation().extras.replaceUrl) {
            this.router.navigateByUrl("/error", { state: { message: 'Thats not cute!' } });
        }
        else {
            this.permissions = this.router.getCurrentNavigation().extras.state.permissions;
        }
    }
    /**
  
     * Check if we have a valid auth token
  
     * @param next
  
     * @param state
  
     */
    canActivate(next, state) {
        //ToDo if authService.isLoggedIn && hasRoles(user)
        return this.hasRoles();
    }
    hasRoles() {
        if (this.permissions.length) {
            return true;
        }
        else {
            return false;
        }
    }
};
LoggedInGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], LoggedInGuard);
export { LoggedInGuard };
//# sourceMappingURL=logged-in.guard.js.map