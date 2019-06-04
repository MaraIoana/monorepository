import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BackendService } from "./backend.service";
let UserService = class UserService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    getAllUsers() {
        //return this.backendService.get('jbugs/jbugs-api/users');
        //return this.backendService.get('localhost:8080/jbugs/jbugs-api/users');
        return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users');
    }
    updateUser(user) {
        return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/users', user);
    }
    addUser(user) {
        return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users', user);
    }
    getUser(userName) {
        var urlGet;
        urlGet = 'http://localhost:8080/jbugs/jbugs-api/users/getUser/' + userName;
        //return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users/getUser/',userName);
        return this.backendService.get(urlGet);
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [BackendService])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map