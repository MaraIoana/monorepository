import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatRadioChange} from "@angular/material";
import {empty} from "rxjs/internal/Observer";

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.css']
})
export class StatusDialogComponent implements OnInit {

  private rowData;
  private fixed;
  private info;
  private closed;
  private inprogress;
  private rejected;
  private nulll;
  private title;

  private statusValue;

  constructor(
    public dialogRef: MatDialogRef<StatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close(this.statusValue);
  }

  close(): void {
    this.dialogRef.close();
  }

  onChange(mrChange: MatRadioChange) {
    // console.log("Value: ", mrChange.value);
    // let mrButton: MatRadioButton = mrChange.source;
    // console.log("Name: ",mrButton.name);
    // console.log("Checked:", mrButton.checked);
    this.statusValue = mrChange.value;
  }

  ngOnInit() {
    this.rowData = this.data;
    this.fixed = true;
    this.info = true;
    this.closed = true;
    this.inprogress = true;
    this.rejected = true;
    this.nulll=true;
    this.title=false;
    this.visibleRadioButtons();
  }

  visibleRadioButtons() {

    if (this.rowData === "NEW") {
      this.inprogress = false;
      this.rejected = false;
    } else if (this.rowData === "REJECTED") {
      this.closed = false;
    } else if (this.rowData === "INPROGRESS") {
      this.rejected = false;
      this.info = false;
      this.fixed = false;
    } else if (this.rowData === "INFONEEDED") {
      this.inprogress = false;
    } else if (this.rowData === "FIXED") {
      this.closed = false;
    } else if(this.rowData==="CLOSED")
      this.nulll=false;
    this.title=true;
  }
}
