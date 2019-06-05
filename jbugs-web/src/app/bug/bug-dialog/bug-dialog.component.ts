import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Bug} from "../../models/bug.model";

@Component({
  selector: 'app-bug-dialog',
  templateUrl: './bug-dialog.component.html',
  styleUrls: ['./bug-dialog.component.css']
})
export class BugDialogComponent implements OnInit {
  public bugNew: Bug = {};
  form: FormGroup;
  selectedValue: string;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<BugDialogComponent>) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: '',
      description: '',

    })
  }

  save() {
    console.log();
  }

  close() {
    this.dialogRef.close();
  }


  submit(form: FormGroup) {

  }
}
