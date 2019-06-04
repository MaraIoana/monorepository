import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, Validators} from "@angular/forms";
import {Bug} from "../../models/bug.model";

@Component({
  selector: 'app-bug-dialog',
  templateUrl: './bug-dialog.component.html',
  styleUrls: ['./bug-dialog.component.css']
})
export class BugDialogComponent implements OnInit {
  public bugNew: Bug = {};
  public title: string;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<BugDialogComponent>) {
  }

  ngOnInit() {
  }

  WordpressForm = this.fb.group({
    title: ['', [Validators.required]]
  });

  getTitle() {
    return this.WordpressForm.get('title');
  }

  save() {
    const template_Title = this.title;
    console.log(template_Title);
  }

  // save(form: NgForm) {
  //   this.dialogRef.close();
  //   //console.log(form.value.firstName);
  // }
  //
  // close() {
  //   this.dialogRef.close();
  // }

}
