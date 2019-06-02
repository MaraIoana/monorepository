import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from "./users/users.component";
import {JumperDirective} from "./directives/jumper.directive";
import {RbtnDirective} from "./directives/rbtn.directive";
import {BackendService} from "./services/backend.service";
import {AgGridModule} from "ag-grid-angular"
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    UsersComponent,
    JumperDirective,
    RbtnDirective
  ],
  providers: [
    BackendService,
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
export class UserModule {
}
