import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from "./users/users.component";
import { JumperDirective } from "./directives/jumper.directive";
import { RbtnDirective } from "./directives/rbtn.directive";
import { BackendService } from "./services/backend.service";
import { AgGridModule } from "ag-grid-angular";
import { RouterModule } from "@angular/router";
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            UsersComponent,
            JumperDirective,
            RbtnDirective
        ],
        providers: [
            BackendService
        ],
        imports: [
            CommonModule,
            AgGridModule.withComponents([]),
            RouterModule
        ],
        exports: [
            UsersComponent,
            JumperDirective,
            RbtnDirective
        ]
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map