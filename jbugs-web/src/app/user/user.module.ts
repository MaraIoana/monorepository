import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user.component";
import {JumperDirective} from "./directives/jumper.directive";
import {RbtnDirective} from "./directives/rbtn.directive";
import {BackendService} from "./services/backend.service";
import {AgGridModule} from "ag-grid-angular"


@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    JumperDirective,
    RbtnDirective
  ],
  providers: [
    BackendService,
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    UserListComponent,
    UserComponent,
    JumperDirective,
    RbtnDirective
  ]

})
export class UserModule {
}
