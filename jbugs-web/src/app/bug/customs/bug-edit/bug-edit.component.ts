import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.css']
})
export class BugEditComponent implements OnInit {

  private rowData;

  constructor(public dialogRef:MatDialogRef<BugEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.rowData = this.data;
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
