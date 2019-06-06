import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Bug} from "../../models/bug.model";
import {UserService} from "../../user/services/user.service";
import {addUser} from "../../models/addUser.model";
import {PermissionService} from "../../role/services/permission.service";

@Component({
  selector: 'app-bug-dialog',
  templateUrl: './bug-dialog.component.html',
  styleUrls: ['./bug-dialog.component.css']
})
export class BugDialogComponent implements OnInit {
  public bugNew: Bug = {};
  private userList: addUser[];

  constructor(private dialogRef: MatDialogRef<BugDialogComponent>,
              private permissionService:PermissionService,
              private userService:UserService) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
    });

  }

  save() {
    this.bugNew.createdBy = this.permissionService.getUsername();
    this.dialogRef.close(this.bugNew);
  }

  close() {
    this.dialogRef.close();
  }


  submit(form: FormGroup) {
    console.log("sadas");
  }
}
