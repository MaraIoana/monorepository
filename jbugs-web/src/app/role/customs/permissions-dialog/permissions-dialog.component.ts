import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Permission} from "../../../models/permission.model";
import {PermissionService} from "../../services/permission.service";

@Component({
  selector: 'app-permissions-dialog',
  templateUrl: './permissions-dialog.component.html',
  styleUrls: ['./permissions-dialog.component.css']
})
export class PermissionsDialogComponent implements OnInit {

  private columnDefs;
  private gridApi;
  private gridColumnApi;

  private isLast = false;
  private isSelected = false;
  private validForm =false;

  private rowSelection;

  private permissionList:Permission[]=[];

  private rolePermissions:Permission[]=[];

  public permissionsCheck = [];
  get selectedOptions() {
    return this.permissionsCheck
      .filter(opt => opt.checked)
      .map(opt => opt.type)
  }

  constructor(public dialogRef:MatDialogRef<PermissionsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any, private permissionService:PermissionService) {

    this.columnDefs=[
      {headerName: 'Type',field: 'type',sortable: true, filter: true},
      {headerName: 'Description',field: 'description',sortable: true, filter: true}
    ];

    this.isSelected = false;
    this.validForm = false;
    this.deselectPermissions();

    this.permissionList = data.permissions;

    this.rowSelection = "single";
  }

  ngOnInit() {
    this.permissionService.getPermissions().subscribe(result=> {
      this.permissionList = result;
      for(let r of result){
        this.permissionsCheck.push({
          type:r.type,
          value:r.id,
          checked:false
        })
      }
    });
    this.permissionService.getRolePermissions(this.data.type).subscribe(result=>{
      this.rolePermissions = result;
    })
  }

  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  setSelected(){
    this.isSelected = true;
    this.deselectPermissions();
    if(this.rolePermissions.length<2){
      this.isSelected = false;
    }
  }

  deselectPermissions(){
    for(let p of this.permissionsCheck){
      p.checked = false;
    }
    this.validForm = false;
  }

  deletePermission(){
    let permission:Permission = this.gridApi.getSelectedRows()[0];
    if(this.rolePermissions.length > 1) {
      const index: number = this.rolePermissions.indexOf(permission);
      if (index !== -1) {
        this.rolePermissions.splice(index, 1);
      }
    }
    this.refreshTable();
  }

  printData(){
    console.log(this.rolePermissions);
  }

  validateForm(){
    if(this.selectedOptions.length!==0){
      this.validForm = true;
    }
    else{
      this.validForm = false;
    }
  }

  refreshTable(){
    this.gridApi.setRowData(this.rolePermissions);
    this.isSelected = false;
    this.deselectPermissions();
    this.validForm = false;
  }
}
