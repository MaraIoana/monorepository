import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
let UserAddComponent = class UserAddComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userNew = {};
        this.roles = [
            { name: 'ADMINISTRATOR', value: '1', checked: false },
            { name: 'PROJECT MANAGER', value: '2', checked: false },
            { name: 'TEST MANAGER', value: '3', checked: false },
            { name: 'DEVELOPER', value: '4', checked: false },
            { name: 'TESTER', value: '5', checked: false }
        ];
        this.validForm = false;
    }
    get selectedOptions() {
        return this.roles
            .filter(opt => opt.checked)
            .map(opt => opt.name);
    }
    ngOnInit() {
    }
    addUser(form) {
        this.userNew.firstName = form.value.firstName;
        this.userNew.lastName = form.value.lastName;
        this.userNew.email = form.value.email;
        this.userNew.mobileNumber = form.value.mobileNumber;
        this.userNew.roles = this.selectedOptions;
        this.userService.addUser(this.userNew).subscribe(result => {
            if (result.messageCode) {
                alert("Error while creating user: " + result.message);
            }
            else {
                alert("User with username: " + result.firstName + " was successfully created!");
            }
        });
    }
    back() {
        this.router.navigate(['/dashboard/users']);
    }
    validateForm() {
        if (this.selectedOptions.length !== 0) {
            this.validForm = true;
        }
        else {
            this.validForm = false;
        }
    }
};
UserAddComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-add',
        templateUrl: './user-add.component.html',
        styleUrls: ['./user-add.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UserService, Router])
], UserAddComponent);
export { UserAddComponent };
//# sourceMappingURL=user-add.component.js.map