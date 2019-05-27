import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bug} from "../../models/bug.model";
import {BugService} from "../services/bug.service";

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
  public bugList: Bug[];

  @Output()
  public output = new EventEmitter<Bug>();

  constructor(private bugService: BugService) {
    this.columnDefs = [
      {headerName: 'Title', field: 'title',sortable:true,filter:true},
      {headerName: 'Description', field: 'description',sortable:true,filter:true},
      {headerName: 'Version', field: 'version',sortable:true,filter:true},
      {headerName: 'Date', field: 'date',sortable:true,filter:true},
      {headerName: 'Status', field: 'status',sortable:true,filter:true},
      {headerName: 'Fixed Version', field: 'fixedVersion',sortable:true,filter:true},
      {headerName: 'Severity', field: 'severity',sortable:true,filter:true},
      {headerName: 'Created by', field: 'createdByUser',sortable:true,filter:true},
      {headerName: 'Assigned to', field: 'assignedTo',sortable:true,filter:true},
    ];
    this.rowSelection="single";
  }

  ngOnInit() {
    console.log("initialize bugList with backend stuff");

    this.bugService.getAllBugs()
      .subscribe((bugList)=>{
        this.bugList=bugList;
    })
  }
  //
  // onRowClicked(event: any) { console.log('row', event);
  //     this.output.emit(this.rowSelection.data.field.);
  // }

}
