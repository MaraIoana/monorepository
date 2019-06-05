import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
let UsersComponent = class UsersComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.columnDefs = [
            { headerName: 'Firstname', field: 'firstName', sortable: true, filter: true },
            { headerName: 'Lastname', field: 'lastName', sortable: true, filter: true },
            { headerName: 'Email', field: 'email', sortable: true, filter: true },
            { headerName: 'Mobile', field: 'mobileNumber', sortable: true, filter: true },
            { headerName: 'Username', field: 'username', sortable: true, filter: true }
        ];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.userService.getAllUsers()
            .subscribe((userList) => {
            this.userList = userList;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged() {
        let selectedRows = this.gridApi.getSelectedRows();
        let router = this.router;
        let selectedRowsString = "";
        selectedRows.forEach(function (selectedRow, index) {
            if (index !== 0) {
                selectedRowsString += ", ";
            }
            selectedRowsString += selectedRow.firstName;
            document.getElementById('selectedRow').innerText = selectedRowsString;
            alert(selectedRow.username);
            router.navigate(["dashboard/users/edit", selectedRow.username]);
        });
    }
};
UsersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-list',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UserService, Router])
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=users.component.js.map