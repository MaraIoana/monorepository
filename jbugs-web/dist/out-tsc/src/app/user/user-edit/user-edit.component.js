import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../services/user.service";
let UserEditComponent = class UserEditComponent {
    constructor(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.user = {};
    }
    submit(form) {
        this.user.firstName = form.value.firstName;
        this.user.lastName = form.value.lastName;
        this.user.email = form.value.email;
        this.user.mobileNumber = form.value.mobileNumber;
        //only for test
        //todo remove this line
        //this.userService.updateUser(this.user);
        this.userService.updateUser(this.user).subscribe(result => alert("User with username: " + result.username + " updated successfully"), error => {
            console.log(error);
            alert("Error during Update...");
        });
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.username = params.get('userName');
        });
        console.log(this.username);
        this.userService.getUser(this.username).subscribe((user) => {
            this.user = user;
        });
        //this.user.mobileNumber = "0040666666"
        //console.log(this.user.mobileNumber);
        //this.user = this.userComponent.currentUser;
        console.log("currentUser get from ...:");
        /* this.sub = this. activatedRoute.params.subscribe(params => {
           this.id = +params['id'];*/
        //console.log(this.userComponent.currentUser.email);
        /* });*/
    }
};
UserEditComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-edit',
        templateUrl: './user-edit.component.html',
        styleUrls: ['./user-edit.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, UserService])
], UserEditComponent);
export { UserEditComponent };
//# sourceMappingURL=user-edit.component.js.map