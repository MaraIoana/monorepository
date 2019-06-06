import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bug} from "../../models/bug.model";
import {BugService} from "../services/bug.service";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {BugDialogComponent} from "../bug-dialog/bug-dialog.component";
import {StatusDialogComponent} from "../status-dialog/status-dialog.component";
import {BugsCellComponent} from "../customs/bugs-cell/bugs-cell.component";

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private paginationPageSize;
  private paginationNoFormatter;
  public bugList: Bug[];

  private rowData;
  @Output()
  public output = new EventEmitter<Bug>();

  constructor(private bugService: BugService, public dialog: MatDialog) {
    this.columnDefs = [
      {headerName: 'Id', field: 'id', hide: true},
      {headerName: 'Title', field: 'title',sortable:true,filter:true,width:100},
      {headerName: 'Description', field: 'description',sortable:true,filter:true,width:200,cellClass:"cell-wrap-text"},
      {headerName: 'Version', field: 'version',sortable:true,filter:true,width:100},
      {headerName: 'Date', field: 'date',sortable:true,filter:true,width:200},
      {headerName: 'Status', field: 'status',sortable:true,filter:true,width:100},
      {headerName: 'Fixed Version', field: 'fixedVersion',sortable:true,filter:true,width:150},
      {headerName: 'Severity', field: 'severity',sortable:true,filter:true,width:100},
      {width:110,cellRendererFramework:BugsCellComponent}
     ];
    this.paginationPageSize = 25;
    this.paginationNoFormatter = function (params) {
      return "[" + params.value.toLocaleString() + "]";
    };
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

  openCreateDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    //this.dialog.open(BugDialogComponent);
    const dialogRef = this.dialog.open(BugDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(result);
      }
      //   this.bugService.addBug(result).subscribe(response=>{
      //     console.log(response);
      //   });
      //   this.gridApi.refreshCells();
      // }
    });
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
