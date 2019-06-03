import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {PermissionsDialogComponent} from "../permissions-dialog/permissions-dialog.component";
import {Permission} from "../../../models/permission.model";
import {PermissionService} from "../../services/permission.service";

@Component({
  selector: 'app-roles-cell',
  templateUrl: './roles-cell.component.html',
  styleUrls: ['./roles-cell.component.css']
})
export class RolesCellComponent implements OnInit{

  private rowData;

  constructor(public dialog:MatDialog) { }

  agInit(params){
    this.rowData = params.data;
  }

  ngOnInit() {

  }

  writeSome(){
    console.log("RowData : " +this.rowData.type + " " + this.rowData.permissions);
  }

  openDialog():void{
    let dialogRef = this.dialog.open(PermissionsDialogComponent,{
      data:this.rowData
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log(result + " Dialog closed.");
    })
  }



}
