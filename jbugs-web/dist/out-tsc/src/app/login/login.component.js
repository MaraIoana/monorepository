import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { PermissionService } from "../role/services/permission.service";
let LoginComponent = class LoginComponent {
    constructor(router, permissionService) {
        this.router = router;
        this.permissionService = permissionService;
    }
    ngOnInit() {
    }
    login(x) {
        //todo When session is ready here you should set the permissions on the active session.
        let username = x.control.controls.username.value;
        this.permissionService.getUserPermissions(username).subscribe(data => {
            if (data.message)
                document.getElementById("loginMessage").innerHTML = data.message;
            else
                this.router.navigateByUrl("/dashboard", { state: { permissions: data.permissions } });
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router, PermissionService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map