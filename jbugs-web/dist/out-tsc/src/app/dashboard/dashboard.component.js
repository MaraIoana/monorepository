import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
        this.permissionManagement = false;
        this.userManagement = false;
        this.bugManagement = false;
        this.bugClose = false;
        this.bugExportPDF = false;
        this.isMine = false;
        this.permissions = this.router.getCurrentNavigation().extras.state.permissions;
        console.log(this.router.getCurrentNavigation().extras.state.permissions);
    }
    ngOnInit() {
        this.checkPermissions();
    }
    checkPermissions() {
        this.checkPermissionManagement();
        this.checkUserManagement();
        this.checkBugManagement();
        this.checkBugClose();
        this.checkBugExportPDF();
        this.checkIsMine();
    }
    checkPermissionManagement() {
        if (this.permissions.includes("PERMISSION_MANAGEMENT")) {
            this.permissionManagement = false;
        }
        else
            this.permissionManagement = true;
    }
    checkUserManagement() {
        if (this.permissions.includes("USER_MANAGEMENT")) {
            this.userManagement = false;
        }
        else
            this.userManagement = true;
    }
    checkBugManagement() {
        if (this.permissions.includes("BUG_MANAGEMENT")) {
            this.bugManagement = false;
        }
        else
            this.bugManagement = true;
    }
    checkBugClose() {
        if (this.permissions.includes("BUG_CLOSE")) {
            this.bugClose = false;
        }
        else
            this.bugClose = true;
    }
    checkBugExportPDF() {
        if (this.permissions.includes("BUG_EXPORT_PDF")) {
            this.bugExportPDF = false;
        }
        else
            this.bugExportPDF = true;
    }
    checkIsMine() {
        if (this.permissions.includes("IS_MINE")) {
            this.isMine = false;
        }
        else
            this.isMine = true;
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map