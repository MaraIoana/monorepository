import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatRadioChange} from "@angular/material";
import {PermissionService} from "../../role/services/permission.service";

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
  private permissionService: PermissionService;

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
    this.nulll = true;
    this.title = false;
    this.visibleRadioButtons();
  }

  visibleRadioButtons() {

    if (this.rowData.status === "NEW") {
      this.inprogress = false;
      this.rejected = false;
    } else if (this.rowData.status === "REJECTED") {
      this.closed = false;
    } else if (this.rowData.status === "INPROGRESS") {
      this.rejected = false;
      this.info = false;
      this.fixed = false;
    } else if (this.rowData.status === "INFONEEDED") {
      this.inprogress = false;
    } else if (this.rowData.status === "FIXED") {

      this.closed = false;
    } else if (this.rowData.status === "CLOSED")
      this.nulll = false;
    this.title = true;
  }
}
