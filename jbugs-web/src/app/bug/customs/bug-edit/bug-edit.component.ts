import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {UserService} from "../../../user/services/user.service";
import {addUser} from "../../../models/addUser.model";

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {

  private rowData;

  private username='admin';

  private userList:addUser[];

  constructor(public dialogRef:MatDialogRef<BugEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,
              private userService:UserService) { }

  ngOnInit() {
    this.rowData = this.data;
    this.userService.getAllUsers().subscribe(data=>{
      this.userList = data;
    });

    this.userService.getUserWithId(this.data.assignedTo).subscribe(data=>{
      console.log(data);
    })
  }

  save(){
    this.dialogRef.close({
      'message':'EDIT',
      'data':this.rowData
    });
  }

  close(){
    this.dialogRef.close();
  }

}
