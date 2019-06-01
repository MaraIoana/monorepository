import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {addUser} from "../../models/addUser.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  private rowSelection;

  private columnDefs;
  public self;

  public userList: addUser[];

  constructor(private userService: UserService, private router: Router) {
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
    let router = this.router;
    let selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      selectedRowsString += selectedRow.firstName;
      document.getElementById('selectedRow').innerText=selectedRowsString;
      alert(selectedRow.username);
      router.navigate(["dashboard/users/edit", selectedRow.username]);
    });

  }
}

