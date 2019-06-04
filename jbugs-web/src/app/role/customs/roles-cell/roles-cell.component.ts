import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {PermissionsDialogComponent} from "../permissions-dialog/permissions-dialog.component";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-roles-cell',
  templateUrl: './roles-cell.component.html',
  styleUrls: ['./roles-cell.component.css']
})
export class RolesCellComponent implements OnInit{

  private rowData;

  constructor(public dialog:MatDialog,private roleService:RoleService) { }

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
      data:this.rowData,
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.roleService.savePermission(result).subscribe(data=>{
          console.log("SavePermission result: " + data.type);
        })
      }
    })
  }



}
