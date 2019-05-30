import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleComponent } from './role/role.component';
import {AgGridModule} from "ag-grid-angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [RoleListComponent, RoleComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule,
  ],
  exports:[
    RoleListComponent,
    RoleComponent
  ]
})
export class RoleModule { }
