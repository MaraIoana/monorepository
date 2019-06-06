import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {BugEditComponent} from "../bug-edit/bug-edit.component";
import {BugService} from "../../services/bug.service";
import {StatusDialogComponent} from "../../status-dialog/status-dialog.component";
import {Bug} from "../../../models/bug.model";

@Component({
  selector: 'app-bugs-cell',
  templateUrl: './bugs-cell.component.html',
  styleUrls: ['./bugs-cell.component.css']
})
export class BugsCellComponent implements OnInit {

  private rowData;

  private gridApi;

  constructor(private dialog:MatDialog, private bugservice:BugService) { }

  agInit(params){
    this.rowData = params.data;
    this.gridApi = params.api;
  }

  ngOnInit() {

  }

  onEdit(){
    let dialogRef = this.dialog.open(BugEditComponent,{
      data:this.rowData
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.rowData = result.data;
        this.gridApi.refreshCells();
        this.bugservice.updateBug(result.data).subscribe();
      }
    })
  }

  onDetail(){
   // let dialogRef = this.dialog.open();

    // dialogRef.afterClosed().subscribe(result=>{
    //   if(result.message)
    //     console.log(result.message);
    // })
  }

  onStatusEdit(){
    let dialogRef = this.dialog.open(StatusDialogComponent, {
      width: '250px',
      data: this.rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.rowData.status = result;
        this.bugservice.modifyStatus(this.rowData).subscribe();
        this.gridApi.refreshCells();
      }
    });
  }

}
