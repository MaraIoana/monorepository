import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BackendService } from "../../user/services/backend.service";
let PermissionService = class PermissionService {
    constructor(backendService) {
        this.backendService = backendService;
        this.baseUrl = 'http://localhost:8080/jbugs/jbugs-api';
    }
    getPermissions() {
        return this.backendService.get(this.baseUrl + '/permissions');
    }
    getUserPermissions(username) {
        return this.backendService.post(this.baseUrl + '/permissions/userPermissions', { 'username': username
        });
    }
};
PermissionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [BackendService])
], PermissionService);
export { PermissionService };
//# sourceMappingURL=permission.service.js.map