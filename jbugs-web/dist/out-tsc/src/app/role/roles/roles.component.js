import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RoleService } from "../services/role.service";
import { PermissionService } from "../services/permission.service";
let RolesComponent = class RolesComponent {
    constructor(roleService, permissionService) {
        this.roleService = roleService;
        this.permissionService = permissionService;
        this.rolePermissions = [];
        this.isSelected = false;
        this.isPermSelected = false;
        this.validForm = false;
        this.isLast = false;
        this.permissionsCheck = [];
        this.columnDefs = [
            { headerName: 'Type', field: 'type', sortable: true, filter: true, width: 200, cellClass: "cell-wrap-text" },
            { width: 100, cellClass: "cell-wrap-text", cellRenderer: function () {
                    return "<button mat-icon-button (click)=alert('13')><i class='material-icons'>launch</i></button>";
                }
            }
        ];
        this.permColumnDefs = [
            { headerName: 'Type', field: 'type', sortable: true, filter: true },
            { headerName: 'Description', field: 'description', sortable: true, filter: true }
        ];
        this.rowSelection = "single";
    }
    get selectedOptions() {
        return this.permissionsCheck
            .filter(opt => opt.checked)
            .map(opt => opt.type);
    }
    clickMe() {
        alert("pressed");
    }
    ngOnInit() {
        this.roleService.getRoles()
            .subscribe((data) => {
            this.roleList = data;
        });
        this.permissionService.getPermissions()
            .subscribe((data) => {
            this.permissionList = data;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onGridReady2(params) {
        this.gridPermsApi = params.api;
        this.gridPermsColumnApi = params.columnApi;
    }
    onSelectionChanged() {
        let selectedRows = this.gridApi.getSelectedRows();
        let selectedRowsString = "";
        selectedRows.forEach(function (selectedRow, index) {
            if (index !== 0) {
                selectedRowsString += ", ";
            }
            selectedRowsString += selectedRow.type;
            document.getElementById('selectedRow').innerText = selectedRowsString;
        });
        this.permissionsCheck = [];
        for (let perm of this.permissionList) {
            this.permissionsCheck.push({
                type: perm.type,
                value: perm.id,
                checked: false
            });
        }
        this.rolePermissions = this.getPermissions(selectedRows[0].permissions);
        this.isSelected = true;
        this.isPermSelected = false;
        this.validForm = false;
        this.deselectPermissions();
    }
    setSelected() {
        let role;
        role = this.gridApi.getSelectedRows()[0];
        if (role.permissions.length > 1) {
            this.isLast = false;
        }
        else {
            this.isLast = true;
        }
        this.isPermSelected = true;
        this.deselectPermissions();
    }
    deselectPermissions() {
        for (let p of this.permissionsCheck) {
            p.checked = false;
        }
        this.validForm = false;
    }
    validateForm() {
        if (this.selectedOptions.length !== 0) {
            this.validForm = true;
        }
        else {
            this.validForm = false;
        }
    }
    getPerm(type) {
        for (let permission of this.permissionList) {
            if (permission.type === type) {
                return permission;
            }
        }
    }
    getPermissions(perms) {
        let permList = [];
        for (let perm of perms) {
            permList.push(this.getPerm(perm));
        }
        return permList;
    }
    savePermission() {
        let role;
        role = this.gridApi.getSelectedRows()[0];
        //todo create checkboxes for remaining permissions
        let addMessages = '';
        for (let perm of this.selectedOptions) {
            if (role.permissions.includes(perm)) {
                addMessages += "<li>" + perm + " already set! </li>";
            }
            else {
                role.permissions.push(perm);
                console.log(role.permissions);
                this.roleService.savePermission(role).subscribe();
                this.refreshTable();
            }
            document.getElementById("infoMessage").innerHTML = addMessages;
            setTimeout(() => {
                document.getElementById("infoMessage").innerHTML = "";
            }, 3000);
        }
    }
    deletePermission() {
        let role;
        let perm;
        role = this.gridApi.getSelectedRows()[0];
        perm = this.gridPermsApi.getSelectedRows()[0];
        if (role.permissions.length > 1) {
            const index = role.permissions.indexOf(perm.type);
            if (index !== -1) {
                role.permissions.splice(index, 1);
            }
            this.roleService.savePermission(role).subscribe();
            this.refreshTable();
        }
        else {
            document.getElementById("infoMessage").innerHTML = "A role must remain with at least one permission!";
            setTimeout(() => {
                document.getElementById("infoMessage").innerHTML = "";
            }, 3000);
        }
    }
    refreshTable() {
        this.rolePermissions = this.getPermissions(this.gridApi.getSelectedRows()[0].permissions);
        this.isPermSelected = false;
        this.deselectPermissions();
        this.validForm = false;
    }
};
RolesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-role-list',
        templateUrl: './roles.component.html',
        styleUrls: ['./roles.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [RoleService, PermissionService])
], RolesComponent);
export { RolesComponent };
//# sourceMappingURL=roles.component.js.map