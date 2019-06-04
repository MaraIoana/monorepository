import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {BugEditComponent} from "../bug-edit/bug-edit.component";
import {BugService} from "../../services/bug.service";

@Component({
  selector: 'app-bugs-cell',
  templateUrl: './bugs-cell.component.html',
  styleUrls: ['./bugs-cell.component.css']
})
export class BugsCellComponent implements OnInit {

  private rowData;

  private gridApi;

  constructor(private dialog: MatDialog, private bugService: BugService) {
  }

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
      console.log(result);
      this.gridApi.setRowData(result.data);
    })
  }

  onDetail(){
   // let dialogRef = this.dialog.open();

    // dialogRef.afterClosed().subscribe(result=>{
    //   if(result.message)
    //     console.log(result.message);
    // })
  }

}
