import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugsComponent} from "./bugs/bugs.component";
import {AgGridModule} from 'ag-grid-angular';
import {StatusDialogComponent} from './status-dialog/status-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BugsComponent,
    StatusDialogComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    AgGridModule,
    MatRadioModule,
    FormsModule
  ],
  exports:[
    BugsComponent,
    StatusDialogComponent
  ]
})
export class BugModule { }
