import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BackendService } from "../../user/services/backend.service";
let RoleService = class RoleService {
    constructor(backendService) {
        this.backendService = backendService;
        this.baseUrl = 'http://localhost:8080/jbugs/jbugs-api';
    }
    getRoles() {
        return this.backendService.get(this.baseUrl + '/roles');
    }
    getRole(roleType) {
        return this.backendService.post(this.baseUrl + '/roles/role', roleType);
    }
    savePermission(role) {
        if (role.permissions.length === 0) {
            return this.backendService.post(this.baseUrl + '/roles/save', {
                'type': role.type,
                'permissions': {}
            });
        }
        return this.backendService.post(this.baseUrl + '/roles/save', role);
    }
};
RoleService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [BackendService])
], RoleService);
export { RoleService };
//# sourceMappingURL=role.service.js.map