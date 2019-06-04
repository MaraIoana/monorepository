import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { BugService } from "../services/bug.service";
let BugsComponent = class BugsComponent {
    constructor(bugService) {
        this.bugService = bugService;
        this.output = new EventEmitter();
        this.columnDefs = [
            { headerName: 'Title', field: 'title', sortable: true, filter: true },
            { headerName: 'Description', field: 'description', sortable: true, filter: true },
            { headerName: 'Version', field: 'version', sortable: true, filter: true },
            { headerName: 'Date', field: 'date', sortable: true, filter: true },
            { headerName: 'Status', field: 'status', sortable: true, filter: true },
            { headerName: 'Fixed Version', field: 'fixedVersion', sortable: true, filter: true },
            { headerName: 'Severity', field: 'severity', sortable: true, filter: true },
        ];
        this.rowSelection = "single";
    }
    ngOnInit() {
        console.log("initialize bugList with backend stuff");
        this.bugService.getAllBugs()
            .subscribe((bugList) => {
            this.bugList = bugList;
            for (var b in this.bugList) {
                var date = this.bugList[b].date;
                var d = new Date(date);
                var ds = d.toLocaleString();
                this.bugList[b].date = ds;
            }
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged() {
        let selectedRows = this.gridApi.getSelectedRows();
        let selectedRowsString = "";
        selectedRows.forEach(function (selectedRow, index) {
            if (index !== 0) {
                selectedRowsString += ", ";
            }
            var date = selectedRow.date;
            var d = new Date(date);
            var ds = d.toLocaleString();
            console.log(ds);
            selectedRowsString += selectedRow.title + ", " + selectedRow.description + ", date: " + ds + ", " +
                selectedRow.version + ", " + selectedRow.status + ", " + selectedRow.fixedVersion + ", " + selectedRow.severity;
            alert(selectedRowsString);
        });
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], BugsComponent.prototype, "output", void 0);
BugsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bugs',
        templateUrl: './bugs.component.html',
        styleUrls: ['./bugs.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [BugService])
], BugsComponent);
export { BugsComponent };
//# sourceMappingURL=bugs.component.js.map