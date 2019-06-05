import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import {AgGridModule} from "ag-grid-angular";
import {FormsModule} from "@angular/forms";
import {MatCardModule, MatCheckboxModule, MatDialogActions} from "@angular/material";

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule,
    MatCheckboxModule,
    MatCardModule
  ],
  exports:[
    RolesComponent
  ]
})
export class RoleModule { }
