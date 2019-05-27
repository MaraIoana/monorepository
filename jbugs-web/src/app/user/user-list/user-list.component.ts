import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private rowSelection;

  private columnDefs;

  public userList: User[];

  constructor(private userService: UserService) {
    this.columnDefs = [
      {headerName: 'Firstname', field: 'firstName',sortable:true,filter:true},
      {headerName: 'Lastname', field: 'lastName',sortable:true,filter:true},
      {headerName: 'Email', field: 'email',sortable:true,filter:true},
      {headerName: 'Mobile', field: 'mobileNumber',sortable:true,filter:true},
      {headerName: 'Username', field: 'username',sortable:true,filter:true},
      {headerName: 'Password', field: 'password',sortable:true,filter:true},
      {headerName: 'Counter', field: 'counter',sortable:true,filter:true},
    ];
    this.rowSelection="single";
  }


  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((userList) => {
        this.userList = userList;
      })
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged() {
    let selectedRows = this.gridApi.getSelectedRows();
    let selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.firstName;
      document.getElementById('selectedRow').innerText=selectedRowsString;
    });

  }
}

