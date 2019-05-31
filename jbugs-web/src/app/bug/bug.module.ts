import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BugsComponent} from "./bugs/bugs.component";
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    BugsComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports:[
    BugsComponent
  ]
})
export class BugModule { }
