import {Component,OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../../models/user.model";
import {RestUser} from "../../models/restUser.models";
import {addUser} from "../../models/addUser.model";

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

  public userList: addUser[];

  constructor(private userService: UserService) {
    this.columnDefs = [
      {headerName: 'Firstname', field: 'firstName',sortable:true,filter:true},
      {headerName: 'Lastname', field: 'lastName',sortable:true,filter:true},
      {headerName: 'Email', field: 'email',sortable:true,filter:true},
      {headerName: 'Mobile', field: 'mobileNumber',sortable:true,filter:true},
      {headerName: 'Username', field: 'username',sortable:true,filter:true}

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

