import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {UserDetailsComponent} from "../../../user/customs/user-details/user-details.component";
import {BugEditComponent} from "../bug-edit/bug-edit.component";

@Component({
  selector: 'app-bugs-cell',
  templateUrl: './bugs-cell.component.html',
  styleUrls: ['./bugs-cell.component.css']
})
export class BugsCellComponent implements OnInit {

  private rowData;

  constructor(private dialog:MatDialog) { }

  agInit(params){
    this.rowData = params.data;
  }

  ngOnInit() {

  }

  onEdit(){
    let dialogRef = this.dialog.open(BugEditComponent,{
      data:this.rowData
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
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