import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { AgGridModule } from "ag-grid-angular";
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material";
let RoleModule = class RoleModule {
};
RoleModule = tslib_1.__decorate([
    NgModule({
        declarations: [RolesComponent],
        imports: [
            CommonModule,
            AgGridModule.withComponents([]),
            FormsModule,
            MatCheckboxModule
        ],
        exports: [
            RolesComponent
        ]
    })
], RoleModule);
export { RoleModule };
//# sourceMappingURL=role.module.js.map