import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BackendService } from "./backend.service";
let BugService = class BugService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    getAllBugs() {
        return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/bugs');
    }
};
BugService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [BackendService])
], BugService);
export { BugService };
//# sourceMappingURL=bug.service.js.map