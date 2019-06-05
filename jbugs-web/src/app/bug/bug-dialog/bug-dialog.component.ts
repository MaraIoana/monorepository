import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Bug} from "../../models/bug.model";
import {UserService} from "../../user/services/user.service";
import {addUser} from "../../models/addUser.model";

@Component({
  selector: 'app-bug-dialog',
  templateUrl: './bug-dialog.component.html',
  styleUrls: ['./bug-dialog.component.css']
})
export class BugDialogComponent implements OnInit {
  public bugNew: Bug = {};
  form: FormGroup;
  selectedValue: string;
  private userList: addUser[];
  selectedUsername: String;
  title = new FormControl();

  constructor(private userService: UserService,
              private formBuilder: FormBuilder, private dialogRef: MatDialogRef<BugDialogComponent>) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.userList = data;
    });

  }

  save() {
    console.log();
  }

  close() {
    this.dialogRef.close();
  }


  submit(form: FormGroup) {
    console.log("sadas");
  }
}
