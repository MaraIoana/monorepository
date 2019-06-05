import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugsComponent} from "./bugs/bugs.component";
import {AgGridModule} from 'ag-grid-angular';
import {StatusDialogComponent} from './status-dialog/status-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogActions, MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BugsComponent,
    StatusDialogComponent,
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule,
  ],
  exports:[
    BugsComponent,
    StatusDialogComponent,
  ]
})
export class BugModule { }
