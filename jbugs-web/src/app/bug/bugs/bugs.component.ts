import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bug} from "../../models/bug.model";
import {BugService} from "../services/bug.service";
import {MatDialog} from '@angular/material/dialog';
import {StatusDialogComponent} from "../status-dialog/status-dialog.component";

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private rowSelection;
  private columnDefs;
  private paginationPageSize;
  private paginationNoFormatter;
  public bugList: Bug[];
  private bugStatus: Bug = {};

  private rowData;
  @Output()
  public output = new EventEmitter<Bug>();

  constructor(private bugService: BugService, public dialog: MatDialog) {
    this.columnDefs = [
      {headerName: 'Id', field: 'id', hide: true},
      {headerName: 'Title', field: 'title',sortable:true,filter:true},
      {headerName: 'Description', field: 'description',sortable:true,filter:true},
      {headerName: 'Version', field: 'version',sortable:true,filter:true},
      {headerName: 'Date', field: 'date',sortable:true,filter:true},
      {headerName: 'Status', field: 'status',sortable:true,filter:true},
      {headerName: 'Fixed Version', field: 'fixedVersion',sortable:true,filter:true},
      {headerName: 'Severity', field: 'severity',sortable:true,filter:true},
    //   {headerName: 'Created by', field: 'createdByUser',sortable:true,filter:true},
    //   {headerName: 'Assigned to', field: 'assignedTo',sortable:true,filter:true},
     ];
    this.rowSelection="single";
    this.paginationPageSize=25;
    this.paginationNoFormatter = function(params) {
      return "[" + params.value.toLocaleString() + "]";
    };
  }

  agInit(params) {
    this.rowData = params.data;

  }

  openDialog(): void {
    let selectedRows = this.gridApi.getSelectedRows();
    let status = "";
    let idBug;
    selectedRows.forEach(function (selectedRow, index) {
      if (index !== 0) {
        status += ", ";
      }
      status = selectedRow.status;
      idBug = selectedRow.id;
    });

    const dialogRef = this.dialog.open(StatusDialogComponent, {
      width: '250px',
      data: status
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Statusul s-a modificat in !!!!!' + result + " !!!!!!!!!!");
      console.log("bug.status====== " + this.bugStatus);


      this.bugStatus.severity = "NULL";
      this.bugStatus.status = result;
      console.log("bug.status====== " + this.bugStatus.status);
      this.bugStatus.id = idBug;
      console.log("bug.id====== " + this.bugStatus.id);
      this.bugService.modifyStatus(this.bugStatus).subscribe();
    });
  }

  ngOnInit() {
    this.bugService.getAllBugs()
      .subscribe((bugList)=>{
        this.bugList=bugList;
        for(var b in this.bugList ){
          var date = this.bugList[b].date;
          var d = new Date(date);
          var ds = d.toLocaleString();
          this.bugList[b].date=ds;
        }
    })
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged() {
    let selectedRows = this.gridApi.getSelectedRows();
    this.rowData = this.gridApi.getSelectedRows();
    let selectedRowsString = "";
    selectedRows.forEach(function(selectedRow, index) {
      if (index !== 0) {
        selectedRowsString += ", ";
      }
      var date = selectedRow.date;
      var d = new Date(date);
      var ds = d.toLocaleString();
      console.log(ds);
      selectedRowsString += selectedRow.title+", "+ selectedRow.description+", date: "+ds+", "+
        selectedRow.version+", "+selectedRow.status+", "+selectedRow.fixedVersion+", "+selectedRow.severity;
      alert(selectedRowsString);
    });
  }
}
