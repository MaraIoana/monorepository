import { Component, OnInit } from '@angular/core';
import {RoleService} from "../services/role.service";
import {Role} from "../../models/role.model";
import {Permission} from "../../models/permission.model";
import {PermissionService} from "../services/permission.service";
import {RolesCellComponent} from "../customs/roles-cell/roles-cell.component";

@Component({
  selector: 'app-role-list',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  public roleList: Role[];

  constructor(private roleService: RoleService) {
    this.columnDefs = [
      {headerName: 'Type', field: 'type', sortable: true, filter: true, width:200,cellClass:"cell-wrap-text"},
      { width: 60,cellRendererFramework:RolesCellComponent
      }
    ];
  }

  ngOnInit() {
    this.roleService.getRoles()
      .subscribe((data) => {
        this.roleList = data;
      });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
