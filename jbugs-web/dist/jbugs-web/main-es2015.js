(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;The content below is only a placeholder and can be replaced.&ndash;&gt;-->\r\n<!--<div style=\"text-align:left\">-->\r\n<!--  <h1>-->\r\n<!--    Welcome to {{ title2 }}!-->\r\n<!--  </h1>-->\r\n<!--&lt;!&ndash;  <app-user-list (output)=\"alertUserFromList($event)\"> </app-user-list>&ndash;&gt;-->\r\n<!--&lt;!&ndash;  <app-user (output)=\"alertUserFromList($event)\" [user]=\"user\" #userList> </app-user>&ndash;&gt;-->\r\n<!--&lt;!&ndash;  <button appJumper (click)=\"alertChild()\">Alert child component</button>&ndash;&gt;-->\r\n<!--&lt;!&ndash;  <app-user-management></app-user-management>&ndash;&gt;-->\r\n<!--</div>-->\r\n<!--<router-outlet></router-outlet>-->\r\n<!--<nav>-->\r\n<!--  <h1>-->\r\n<!--    <a routerLinkActive=\"active current\" routerLink=\"/users\">Users</a>-->\r\n<!--    <a routerLinkActive=\"active current\" routerLink=\"/bugs\">Bugs</a>-->\r\n<!--  </h1>-->\r\n<!--</nav>-->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bug/bug-dialog/bug-dialog.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bug/bug-dialog/bug-dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form [formGroup]=\"WordpressForm\">-->\r\n\r\n<!--  <div class=\"form-group\">-->\r\n<!--    <mat-form-field class=\"example-full-width\">-->\r\n<!--      <input matInput placeholder=\"Title\" [(ngModel)]='title' formControlName='title'>-->\r\n<!--    </mat-form-field>-->\r\n<!--    <div>-->\r\n<!--      <button (click)=\"save()\">Save</button>-->\r\n<!--    </div>-->\r\n<!--  </div>-->\r\n<!--</form>-->\r\n<form [formGroup]=\"form\" (ngSubmit)=\"submit(form)\">\r\n<mat-dialog-content>\r\n  <form class=\"example-form\">\r\n    <ol>\r\n    <mat-form-field>\r\n      <input matInput\r\n             placeholder=\"Title\"\r\n             formControlName=\"title\"\r\n             >\r\n    </mat-form-field>\r\n      <br>\r\n    <mat-form-field>\r\n      <textarea matInput\r\n                placeholder=\"Description\"\r\n                formControlName=\"description\"\r\n                >\r\n      </textarea>\r\n    </mat-form-field>\r\n      <br>\r\n\r\n    <mat-form-field>\r\n      <input matInput\r\n             placeholder=\"Revision/Version\"\r\n             formControlName=\"version\"\r\n             >\r\n    </mat-form-field>\r\n      <br>\r\n    <mat-form-field>\r\n      <input matInput\r\n             placeholder=\"Fixed in version/Revision\"\r\n             formControlName=\"fixedVersion\"\r\n             >\r\n    </mat-form-field>\r\n      <br>\r\n    <mat-form-field>\r\n      <input matInput\r\n             [matDatepicker]=\"picker\"\r\n             placeholder=\"Choose a target date\"\r\n             formControlName=\"date\"\r\n            >\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n      <br>\r\n    <mat-form-field>\r\n      <mat-select [(value)]=\"selectedValue\" name=\"severity\" placeholder=\"Severity\">\r\n        <mat-option value=\"CRITICAL\">CRITICAL</mat-option>\r\n        <mat-option value=\"HIGH\">HIGH</mat-option>\r\n        <mat-option value=\"MEDIUM\">MEDIUM</mat-option>\r\n        <mat-option value=\"LOW\">LOW</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <mat-select [(ngModel)]=\"selectedUsername\" name=\"username\" placeholder=\"Assigned To\">\r\n          <mat-option *ngFor=\"let user of userList\" [value]=\"user.username\">\r\n            {{user.username}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </ol>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button type=\"submit\">Add</button>\r\n  <button mat-button type=\"button\" mat-dialog-close>Cancel</button>\r\n</mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bug/bugs/bugs.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bug/bugs/bugs.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>bugs</h3>\r\n<button (click)=\"openCreateDialog()\">Add a new bug</button>\r\n<!--<div>-->\r\n<!--  <li *ngFor=\"let bug of bugList\"> {{bug.title}},{{bug.description}},{{bug.severity}}-->\r\n\r\n<!--</div>-->\r\n\r\n<div class=\"test-header\"><span id=\"selectedRow\"></span></div>\r\n<ag-grid-angular\r\n  id=\"myGrid\"\r\n  style=\"width: 1090px; height: 930px;\"\r\n  class=\"ag-theme-balham-dark shadow p-3 mb-5 bg-dark rounded\"\r\n  [rowData]=\"bugList\"\r\n  [columnDefs]=\"columnDefs\"\r\n  [rowSelection]=\"rowSelection\"\r\n  rowHeight=\"33\"\r\n  (selectionChanged)=\"onSelectionChanged()\"\r\n  (gridReady)=\"onGridReady($event)\"\r\n  [pagination]=\"true\"\r\n  [paginationPageSize]=\"paginationPageSize\"\r\n  domLayout=\"print\"\r\n>\r\n</ag-grid-angular>\r\n\r\n<!--todo disable button if drept != BUG_CLOSE-->\r\n\r\n<div>\r\n  <button mat-raised-button (click)=\"openDialog()\">Modify status</button>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bug/customs/bug-edit/bug-edit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bug/customs/bug-edit/bug-edit.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <form class=\"example-form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Title</mat-label>\r\n      <input matInput\r\n             [(ngModel)]=\"data.title\"\r\n             name=\"title\"\r\n             value=\"{{data.title}}\"\r\n      >\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\" floatLabel=\"always\">\r\n      <mat-label>Description</mat-label>\r\n      <textarea matInput\r\n                [(ngModel)]=\"data.description\"\r\n                name=\"description\"\r\n      >\r\n        {{data.description}}\r\n      </textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Version</mat-label>\r\n      <input matInput\r\n             [(ngModel)]=\"data.version\"\r\n             name=\"version\"\r\n             value=\"{{data.version}}\"\r\n      >\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>FixedVersion</mat-label>\r\n      <input matInput\r\n             [(ngModel)]=\"data.fixedVersion\"\r\n             name=\"fixedVersion\"\r\n             value=\"{{data.fixedVersion}}\"\r\n      >\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Severity</mat-label>\r\n      <mat-form-field>\r\n        <mat-select\r\n          [(ngModel)]=\"data.severity\"\r\n          name=\"severity\"\r\n          [(value)]=\"data.severity\"\r\n        >\r\n          <mat-option value=\"CRITICAL\">CRITICAL</mat-option>\r\n          <mat-option value=\"HIGH\">HIGH</mat-option>\r\n          <mat-option value=\"MEDIUM\">MEDIUM</mat-option>\r\n          <mat-option value=\"LOW\">LOW</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <mat-select\r\n        [(value)]=\"username\"\r\n      >\r\n        <mat-option *ngFor=\"let user of userList\" [(value)]=\"user.username\">\r\n          {{user.username}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </form>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"close()\">Close</button>\r\n  <button mat-raised-button (click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bug/customs/bugs-cell/bugs-cell.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bug/customs/bugs-cell/bugs-cell.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"onEdit()\">\r\n  <i class=\"material-icons\">edit</i>\r\n</button>\r\n<button mat-button (click)=\"onDetail()\">\r\n  <i class=\"material-icons\">desktop_windows</i>\r\n</button>\r\n<button mat-button>\r\n  <i class=\"material-icons\">details</i>\r\n</button>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bug/status-dialog/status-dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bug/status-dialog/status-dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Modify status</h1>\r\n<div mat-dialog-content>\r\n  <p [hidden]=\"title\">Choose status</p>\r\n\r\n  <mat-radio-group (change)=\"onChange($event)\" aria-label=\"Select an option\">\r\n    <ol>\r\n      <mat-radio-button [hidden]=\"inprogress\" type=\"radio\" value=\"INPROGRESS\">INPROGRESS</mat-radio-button>\r\n      <mat-radio-button [hidden]=\"fixed\" type=\"radio\" value=\"FIXED\">FIXED</mat-radio-button>\r\n      <mat-radio-button [hidden]=\"closed\" type=\"radio\" value=\"CLOSED\">CLOSED</mat-radio-button>\r\n      <mat-radio-button [hidden]=\"rejected\" type=\"radio\" value=\"REJECTED\">REJECTED</mat-radio-button>\r\n      <mat-radio-button [hidden]=\"info\" type=\"radio\" value=\"INFONEEDED\">INFO NEEDED</mat-radio-button>\r\n    </ol>\r\n  </mat-radio-group>\r\n\r\n  <label [hidden]=\"nulll\">Cannot modify status for this bug</label>\r\n\r\n  <button mat-button (click)=\"onNoClick()\">Update</button>\r\n  <button mat-button (click)=\"close()\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 translate>Dashboard</h1></div>\r\n<nav>\r\n  <a routerLinkActive=\"active current\" routerLink=\"users\" [hidden]=\"userManagement\">Users</a>\r\n  <a routerLinkActive=\"active current\" routerLink=\"bugs\" [hidden]=\"bugManagement && bugClose\">Bugs</a>\r\n  <a routerLinkActive=\"active current\" routerLink=\"roles\" [hidden]=\"permissionManagement\">Roles</a>\r\n\r\n  <button (click)=\"logout()\" class=\"btn btn-primary\">Logout</button>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/routing-error/routing-error.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/routing-error/routing-error.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"errorMessage\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form='ngForm' >\r\n  <div class=\"form-group\">\r\n    <div *ngIf=\"submitted\" class=\"alert alert-danger\">Username or password is incorrect</div>\r\n    <label> Username </label>\r\n    <input (click)=\"submitted=false\"\r\n           class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"username\"\r\n           name=\"username\"\r\n           required\r\n           #username=\"ngModel\"\r\n           ngModel>\r\n\r\n    <div class=\"alert alert-danger\" *ngIf=\"username.touched && username.invalid\">\r\n      <div *ngIf=\"username.errors.required\">The username is required.</div>\r\n      <div *ngIf=\"username.errors.pattern\">The pattern is invalid.</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label> Password </label>\r\n    <input (click)=\"submitted = false\"\r\n           class=\"form-control\"\r\n           type=\"password\"\r\n           id=\"password\"\r\n           name=\"password\"\r\n           required\r\n           #password=\"ngModel\"\r\n           ngModel>\r\n    <div *ngIf=\"password.touched && password.invalid\" class=\"alert alert-danger\">Password is required.</div>\r\n  </div>\r\n\r\n  <button (click)=\"onSubmit(form)\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Login</button>\r\n\r\n  <div id=\"loginMessage\">\r\n\r\n  </div>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/role/customs/permissions-dialog/permissions-dialog.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/role/customs/permissions-dialog/permissions-dialog.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{data.type}}</h2>\r\n<mat-dialog-content>\r\n  <ag-grid-angular id=\"permissionGr\"\r\n                   style=\"height: auto;width: auto\"\r\n                   class=\"ag-theme-balham-dark shadow p-3 mp-5 bg-dark rounded\"\r\n                   [rowData]=\"rolePermissions\"\r\n                   [columnDefs]=\"columnDefs\"\r\n                   [rowSelection]=\"rowSelection\"\r\n                   domLayout=\"print\"\r\n                   (gridReady)=\"onGridReady($event)\"\r\n                   (selectionChanged)=\"setSelected()\"\r\n  >\r\n  </ag-grid-angular>\r\n  <form #addPermission='ngForm' (change)=\"validateForm()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"permissions\">Permissions:</label>\r\n      <div *ngFor=\"let permission of permissionsCheck\">\r\n        <label>\r\n          <input type=\"checkbox\"\r\n                 name=\"permissions\"\r\n                 id=\"permissions\"\r\n                 required\r\n                 value=\"{{permission.type}}\"\r\n                 [(ngModel)]=\"permission.checked\"\r\n          >\r\n          {{permission.type}}\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <mat-dialog-actions>\r\n    <button mat-button (click)=\"savePermission()\" [disabled]=\"!validForm\"><i class=\"material-icons\">add_box</i>Add</button>\r\n    <button mat-button (click)=\"deletePermission()\" [disabled]=\"!isSelected\"><i class=\"material-icons\">delete</i>Delete</button>\r\n  </mat-dialog-actions>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"close()\">Close</button>\r\n  <button mat-raised-button (click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/role/customs/roles-cell/roles-cell.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/role/customs/roles-cell/roles-cell.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"openDialog()\">\r\n  <i class=\"material-icons\">edit</i>\r\n</button>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/role/roles/roles.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/role/roles/roles.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ag-grid-angular\r\n  #myGrid\r\n  id=\"myGrid\"\r\n  style=\"width:300px;height: auto\"\r\n  class=\"ag-theme-balham-dark shadow p-3 mb-5 bg-dark rounded\"\r\n  [rowData]=\"roleList\"\r\n  [columnDefs]=\"columnDefs\"\r\n  [rowSelection]=\"false\"\r\n  [animateRows]=\"true\"\r\n  rowHeight=\"33\"\r\n  domLayout=\"print\"\r\n  (gridReady)=\"onGridReady($event)\"\r\n>\r\n</ag-grid-angular>\r\n\r\n<div *ngIf=\"isSelected\">\r\n  <ag-grid-angular *ngIf=\"rolePermissions.length!==0\"\r\n                   id=\"permissionGrid\"\r\n                   class=\"ag-theme-balham-dark\"\r\n                   [rowData]=\"rolePermissions\"\r\n                   [columnDefs]=\"permColumnDefs\"\r\n                   [rowSelection]=\"rowSelection\"\r\n                   domLayout=\"print\"\r\n                   (gridReady)=\"onGridReady2($event)\"\r\n                   (selectionChanged)=\"setSelected()\"\r\n  >\r\n  </ag-grid-angular>\r\n  <p *ngIf=\"rolePermissions.length===0\">\r\n    No permissions!\r\n  </p>\r\n</div>\r\n\r\n<form #addPermission='ngForm' (change)=\"validateForm()\">\r\n  <div class=\"form-group\" *ngIf=\"isSelected\">\r\n    <label for=\"permissions\">Permissions:</label>\r\n    <div *ngFor=\"let permission of permissionsCheck\">\r\n      <label>\r\n        <input type=\"checkbox\"\r\n               name=\"permissions\"\r\n               id=\"permissions\"\r\n               required\r\n               value=\"{{permission.type}}\"\r\n               [(ngModel)]=\"permission.checked\"/>\r\n        {{permission.type}}\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-primary\" [hidden]=\"!isSelected\" [disabled]=\"!validForm\" (click)=\"savePermission()\">Add\r\n    </button>\r\n    <button class=\"btn btn-primary\" [hidden]=\"!isSelected\" [disabled]=\"!isPermSelected || isLast\"\r\n            (click)=\"deletePermission()\">Delete\r\n    </button>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <p id=\"infoMessage\"></p>\r\n  </div>\r\n\r\n\r\n</form>\r\n\r\n<!--<form #addPermission ngModelGroup=\"addPermission\">-->\r\n<!--  <div class=\"form-group\">-->\r\n<!--    <div class=\"form-control\">-->\r\n<!--      <button>DDD</button>-->\r\n<!--    </div>-->\r\n<!--  </div>-->\r\n<!--</form>-->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/customs/user-details/user-details.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/customs/user-details/user-details.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-dialog-content>\r\n    <h2>{{data.firstName}} {{data.lastName}}</h2> <br>\r\n    <i class=\"material-icons\">tag_faces</i> {{data.username}} <br>\r\n    <i class=\"material-icons\">mail</i> {{data.email}} <br>\r\n    <i class=\"material-icons\">phone</i> {{data.mobileNumber}} <br>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button mat-raised-button [hidden]=\"!activateButton\" (click)=\"activate()\"><i class=\"material-icons\">check</i>Activate</button>\r\n    <button mat-raised-button [hidden]=\"!deactivateButton\" (click)=\"deactivate()\"><i class=\"material-icons\">block</i>Deactivate</button>\r\n    <button mat-button (click)=\"close()\">Close</button>\r\n</mat-dialog-actions>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/customs/users-cell/users-cell.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/customs/users-cell/users-cell.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"onEdit()\">\r\n  <i class=\"material-icons\">edit</i>\r\n</button>\r\n<button mat-button (click)=\"onDetail()\">\r\n  <i class=\"material-icons\">desktop_windows</i>\r\n</button>\r\n<button mat-button>\r\n  <i class=\"material-icons\">details</i>\r\n</button>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-add/user-add.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-add/user-add.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form='ngForm' (change)=\"validateForm()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"firstName\"> First Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"firstName\"\r\n           name=\"firstName\"\r\n           required\r\n           minlength=\"5\"\r\n           #firstName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">\r\n      <div *ngIf=\"firstName.errors.required\">The field is required</div>\r\n      <div *ngIf=\"firstName.errors.minlength\">First name should have at least 5 letters.</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"lastName\"> Last Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"lastName\"\r\n           name=\"lastName\"\r\n           required\r\n           #lastName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"lastName.touched && lastName.invalid\">\r\n      <div *ngIf=\"lastName.errors.required\">The field is required</div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"mobileNumber\"> Mobile Number </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"mobileNumber\"\r\n           name=\"mobileNumber\"\r\n           required\r\n           pattern=\"[+]4[0,9]{1}[0-9]{9}\"\r\n           #mobileNumber=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"mobileNumber.touched && mobileNumber.invalid\">\r\n      <div *ngIf=\"mobileNumber.errors.pattern\">The pattern is invalid. Only +40 or +49 allowed</div>\r\n      <div *ngIf=\"mobileNumber.errors.required\">The field is required</div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\"> Email </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"email\"\r\n           name=\"email\"\r\n           required\r\n           pattern=\"[a-zA-Z0-9.-_]{1,}@msggroup.com\"\r\n           #email=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\">\r\n      <div *ngIf=\"email.errors.pattern\">The pattern is invalid. Only @msggroup.com allowed.</div>\r\n      <div *ngIf=\"email.errors.required\">The field is required</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"roles\">Roles:</label>\r\n    <div *ngFor=\"let role of roles\">\r\n      <label>\r\n        <input type=\"checkbox\"\r\n               name=\"roles\"\r\n               id=\"roles\"\r\n               required\r\n               value=\"{{role.name}}\"\r\n               [(ngModel)]=\"role.checked\"/>\r\n        {{role.name}}\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" (click)=\"addUser(form)\" [disabled]=\"(!validForm && form.invalid)\" class=\"btn btn-primary\">Add\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-edit/user-edit.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-edit/user-edit.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form='ngForm'>\r\n  <div class=\"form-group\">\r\n    <label> First Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"firstName\"\r\n           name=\"firstName\"\r\n           required\r\n           minlength=\"5\"\r\n           [ngModel]=\"user.firstName\"\r\n           #firstName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">\r\n      <div *ngIf=\"firstName.errors.minlength\">The pattern is invalid.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> Last Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"lastName\"\r\n           name=\"lastName\"\r\n           required\r\n           [ngModel]=\"user.lastName\"\r\n           #lastName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"lastName.touched && lastName.invalid\">\r\n      <div *ngIf=\"firstName.errors.required\">The field is required</div>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> Email </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"email\"\r\n           name=\"email\"\r\n           required\r\n           pattern=\"[a-zA-Z0-9.-_]{1,}@msggroup.com\"\r\n           [ngModel]=\"user.email\"\r\n           #email=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\">\r\n      <div *ngIf=\"email.errors.pattern\">The pattern is invalid.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> Mobile Number </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"mobilNumber\"\r\n           name=\"mobileNumber\"\r\n           required\r\n           pattern=\"[+]4[0,9]{1}[0-9]{9}\"\r\n           [ngModel]=\"user.mobileNumber\"\r\n           #mobileNumber=\"ngModel\"\r\n           ngModel\r\n           >\r\n\r\n    <div class=\"alert alert-danger\" *ngIf=\"mobileNumber.touched && mobileNumber.invalid\">\r\n      <div *ngIf=\"mobileNumber.errors.pattern\">The pattern is invalid.</div>\r\n      <div *ngIf=\"mobileNumber.errors.required\">The field is required.</div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"roles\">Roles:</label>\r\n    <div id=\"roles\" *ngFor=\"let role of roles\">\r\n      <label>\r\n        <input type=\"checkbox\"\r\n               name=\"{{role.name}}\"\r\n               value=\"{{role.name}}\"\r\n               [(ngModel)]=\"role.checked\"/>\r\n        {{role.name}}\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" (click)=\"submit(form)\" class=\"btn btn-primary\" [disabled]=\"(!validForm && form.invalid)\">\r\n    Update\r\n  </button>\r\n\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user-management/user-management.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user-management/user-management.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form='ngForm' (ngSubmit)=\"submit(form)\">\r\n  <div class=\"form-group\">\r\n    <label> Course Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"courseName\"\r\n           name=\"courseName\"\r\n           required\r\n           #courseName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"courseName.touched && courseName.invalid\">Required field</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"category1\"> Category</label>\r\n    <select\r\n      class=\"form-control\"\r\n      id=\"category1\"\r\n      name=\"category1\"\r\n      multiple\r\n      #category1=\"ngModel\"\r\n      ngModel>\r\n      <option *ngFor=\"let ho of category\">{{ho.name}}</option>\r\n      <div class=\"alert alert-danger\" *ngIf=\"category1.touched && category1.invalid\">Required field</div>\r\n    </select>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group\">\r\n    <label>\r\n      <input type=\"checkbox\" name=\"hasGuarantee\" ngModel>\r\n      30-day money-back guarantee </label>\r\n\r\n  </div>\r\n\r\n\r\n  <!--  <div ngModelGroup=\"user\" #user=\"ngModelGroup\">-->\r\n  <!--    <div class=\"form-group\">-->\r\n  <!--      <label for=\"firstName1\"> First Name group </label>-->\r\n  <!--      <input class=\"form-control\"-->\r\n  <!--             type=\"text\"-->\r\n  <!--             id=\"firstName1\"-->\r\n  <!--             name=\"firstName1\"-->\r\n  <!--             required-->\r\n  <!--             pattern=\"abba\"-->\r\n  <!--             (ngModelChange)=\"log(firstName1)\"-->\r\n  <!--             #firstName1=\"ngModel\"-->\r\n  <!--             ngModel>-->\r\n  <!--      <div class=\"alert alert-danger\" *ngIf=\"firstName1.touched && firstName1.invalid\">-->\r\n  <!--        <div *ngIf=\"firstName1.errors.required\" >The field is required</div>-->\r\n  <!--        <div *ngIf=\"firstName1.errors.pattern\">The pattern is invalid.</div>-->\r\n  <!--      </div>-->\r\n\r\n  <!--    </div>-->\r\n  <!--  </div>-->\r\n\r\n  <!--  <div class=\"form-group\">-->\r\n  <!--    <label for=\"firstName\"> FirstName </label>-->\r\n  <!--    <input class=\"form-control\"-->\r\n  <!--           type=\"text\"-->\r\n  <!--           id=\"firstName\"-->\r\n  <!--            name=\"firstName\"-->\r\n  <!--           required-->\r\n  <!--           pattern=\"[+]4{1}[0,9]{1}[0-9]{9}\"-->\r\n  <!--           (ngModelChange)=\"log(firstName)\"-->\r\n  <!--           #firstName=\"ngModel\"-->\r\n  <!--           ngModel>-->\r\n  <!--    <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">-->\r\n  <!--      <div *ngIf=\"firstName.errors.required\" >The field is required</div>-->\r\n  <!--      <div *ngIf=\"firstName.errors.pattern\">The pattern is invalid.</div>-->\r\n  <!--    </div>-->\r\n\r\n  <!--  </div>-->\r\n\r\n  <!--  <div class=\"form-group\">-->\r\n  <!--    <label> LastName </label>-->\r\n  <!--    <input class=\"form-control\"-->\r\n  <!--           type=\"text\"-->\r\n  <!--           id=\"lastName\"-->\r\n  <!--           name=\"lastName\"-->\r\n  <!--           required-->\r\n  <!--           (ngModelChange)=\"log(lastName)\"-->\r\n  <!--           #lastName=\"ngModel\"-->\r\n  <!--           ngModel>-->\r\n  <!--    <div class=\"alert alert-danger\" *ngIf=\"lastName.touched && lastName.invalid\">Last name is required</div>-->\r\n\r\n  <!--    <div class=\"form-group\">-->\r\n  <!--      <label> Comment </label>-->\r\n  <!--      <textarea id=\"comment\"-->\r\n  <!--                type=\"textarea\"-->\r\n  <!--                class=\"form-control\">-->\r\n\r\n  <!--      </textarea>-->\r\n  <!--    </div>-->\r\n\r\n  <!--    <div class=\"form-group\">-->\r\n  <!--      <label>-->\r\n  <!--        <input type=\"checkbox\" name=\"isSelected\" ngModel>-->\r\n  <!--        CheckBox </label>-->\r\n\r\n  <!--    </div>-->\r\n\r\n  <!--    <div class=\"radio\" *ngFor=\"let ho of hobbies\">-->\r\n  <!--      <label>-->\r\n  <!--        <input type=\"radio\"-->\r\n  <!--               name=\"hobbies\"-->\r\n  <!--               ngModel-->\r\n  <!--               [value]=\"ho.id\">-->\r\n  <!--        {{ho.name}} </label>-->\r\n  <!--    </div>-->\r\n\r\n  <!--    <div class=\"form-group\">-->\r\n  <!--      <label for=\"hobbies\"> Hobbits dropdown</label>-->\r\n  <!--      <select-->\r\n  <!--      class=\"form-control\"-->\r\n  <!--      id=\"hobbies\"-->\r\n  <!--      name=\"bobbies\"-->\r\n  <!--      multiple-->\r\n  <!--      ngModel>-->\r\n  <!--        <option>A</option>-->\r\n  <!--        <option>B</option>-->\r\n\r\n  <!--      </select>-->\r\n  <!--    </div>-->\r\n\r\n\r\n  <p>\r\n    {{form.value | json }}\r\n  </p>\r\n\r\n  <!--    <p>-->\r\n  <!--      {{text2 | summary }}-->\r\n  <!--    </p>-->\r\n\r\n  <button class=\"btn btn-primary\" [disabled]=\"form.invalid\">Create</button>\r\n  <!--  </div>-->\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/users/users.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/users/users.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"user-add\">Add a new user</button>\r\n<br>\r\n<h1>Users</h1>\r\n<br>\r\n<div class=\"test-header\">Selection: <span id=\"selectedRow\"></span></div>\r\n<br>\r\n<ag-grid-angular\r\n  id=\"myGrid\"\r\n  style=\"width: 800px; height: 480px\"\r\n  class=\"ag-theme-balham-dark shadow p-3 mb-5 bg-dark rounded\"\r\n  [rowData]=\"userList\"\r\n  [columnDefs]=\"columnDefs\"\r\n  [rowSelection]=\"false\"\r\n  [animateRows]=\"true\"\r\n  (selectionChanged)=\"onSelectionChanged()\"\r\n  (gridReady)=\"onGridReady($event)\"\r\n  rowHeight=\"33\"\r\n>\r\n</ag-grid-angular>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bug_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bug/bugs/bugs.component */ "./src/app/bug/bugs/bugs.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/logged-in.guard */ "./src/app/guards/logged-in.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user-add/user-add.component */ "./src/app/user/user-add/user-add.component.ts");
/* harmony import */ var _role_roles_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./role/roles/roles.component */ "./src/app/role/roles/roles.component.ts");
/* harmony import */ var _error_routing_error_routing_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/routing-error/routing-error.component */ "./src/app/error/routing-error/routing-error.component.ts");












const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        canActivate: [_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedInGuard"]],
        children: [
            {
                path: 'users',
                canActivate: [],
                children: [
                    {
                        path: '',
                        component: _user_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
                    },
                    {
                        path: 'user-add',
                        component: _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_9__["UserAddComponent"]
                    },
                    {
                        path: 'edit/:userName',
                        component: _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"]
                    },
                    {
                        path: ':userId',
                        children: [
                            {
                                path: 'edit',
                                component: _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"]
                            }
                        ]
                    }
                ]
            },
            {
                path: 'bugs',
                canActivate: [],
                component: _bug_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_3__["BugsComponent"]
            },
            {
                path: 'roles',
                canActivate: [],
                children: [
                    {
                        path: '',
                        component: _role_roles_roles_component__WEBPACK_IMPORTED_MODULE_10__["RolesComponent"]
                    }
                ]
            }
        ]
    },
    {
        path: 'error',
        component: _error_routing_error_routing_error_component__WEBPACK_IMPORTED_MODULE_11__["RoutingErrorComponent"]
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\n\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDOztBQUV0QztFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5uYXYgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user-management/user-management.component */ "./src/app/user/user-management/user-management.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _summary_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./summary.pipe */ "./src/app/summary.pipe.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user-add/user-add.component */ "./src/app/user/user-add/user-add.component.ts");
/* harmony import */ var _role_role_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./role/role.module */ "./src/app/role/role.module.ts");
/* harmony import */ var _bug_bug_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bug/bug.module */ "./src/app/bug/bug.module.ts");
/* harmony import */ var _bug_status_dialog_status_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bug/status-dialog/status-dialog.component */ "./src/app/bug/status-dialog/status-dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./error/error.module */ "./src/app/error/error.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _role_customs_roles_cell_roles_cell_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./role/customs/roles-cell/roles-cell.component */ "./src/app/role/customs/roles-cell/roles-cell.component.ts");
/* harmony import */ var _role_customs_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./role/customs/permissions-dialog/permissions-dialog.component */ "./src/app/role/customs/permissions-dialog/permissions-dialog.component.ts");
/* harmony import */ var _user_customs_users_cell_users_cell_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user/customs/users-cell/users-cell.component */ "./src/app/user/customs/users-cell/users-cell.component.ts");
/* harmony import */ var _user_customs_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/customs/user-details/user-details.component */ "./src/app/user/customs/user-details/user-details.component.ts");
/* harmony import */ var _bug_customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bug/customs/bugs-cell/bugs-cell.component */ "./src/app/bug/customs/bugs-cell/bugs-cell.component.ts");
/* harmony import */ var _bug_customs_bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bug/customs/bug-edit/bug-edit.component */ "./src/app/bug/customs/bug-edit/bug-edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bug_bug_dialog_bug_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./bug/bug-dialog/bug-dialog.component */ "./src/app/bug/bug-dialog/bug-dialog.component.ts");
/* harmony import */ var _services_add_header_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/add-header.service */ "./src/app/services/add-header.service.ts");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _user_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__["UserManagementComponent"],
            _summary_pipe__WEBPACK_IMPORTED_MODULE_9__["SummaryPipe"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_14__["UserAddComponent"],
            _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserEditComponent"],
            _role_customs_roles_cell_roles_cell_component__WEBPACK_IMPORTED_MODULE_21__["RolesCellComponent"],
            _role_customs_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_22__["PermissionsDialogComponent"],
            _bug_bug_dialog_bug_dialog_component__WEBPACK_IMPORTED_MODULE_28__["BugDialogComponent"],
            _role_customs_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_22__["PermissionsDialogComponent"],
            _user_customs_users_cell_users_cell_component__WEBPACK_IMPORTED_MODULE_23__["UsersCellComponent"],
            _user_customs_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_24__["UserDetailsComponent"],
            _bug_customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_25__["BugsCellComponent"],
            _bug_customs_bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_26__["BugEditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__["AgGridModule"].withComponents([]),
            _bug_bug_module__WEBPACK_IMPORTED_MODULE_16__["BugModule"],
            _role_role_module__WEBPACK_IMPORTED_MODULE_15__["RoleModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _role_role_module__WEBPACK_IMPORTED_MODULE_15__["RoleModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_19__["ErrorModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _services_add_header_service__WEBPACK_IMPORTED_MODULE_29__["AddHeader"],
                multi: true
            }
        ],
        entryComponents: [
            _role_customs_roles_cell_roles_cell_component__WEBPACK_IMPORTED_MODULE_21__["RolesCellComponent"],
            _role_customs_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_22__["PermissionsDialogComponent"],
            _user_customs_users_cell_users_cell_component__WEBPACK_IMPORTED_MODULE_23__["UsersCellComponent"],
            _user_customs_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_24__["UserDetailsComponent"],
            _bug_customs_bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_26__["BugEditComponent"],
            _bug_status_dialog_status_dialog_component__WEBPACK_IMPORTED_MODULE_17__["StatusDialogComponent"],
            _bug_customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_25__["BugsCellComponent"],
            _bug_customs_bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_26__["BugEditComponent"],
            _bug_bug_dialog_bug_dialog_component__WEBPACK_IMPORTED_MODULE_28__["BugDialogComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/bug/bug-dialog/bug-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bug/bug-dialog/bug-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1Zy9idWctZGlhbG9nL2J1Zy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bug/bug-dialog/bug-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bug/bug-dialog/bug-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: BugDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugDialogComponent", function() { return BugDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/services/user.service */ "./src/app/user/services/user.service.ts");





let BugDialogComponent = class BugDialogComponent {
    constructor(userService, formBuilder, dialogRef) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.bugNew = {};
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
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
    submit(form) {
        console.log("sadas");
    }
};
BugDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bug-dialog',
        template: __webpack_require__(/*! raw-loader!./bug-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/bug/bug-dialog/bug-dialog.component.html"),
        styles: [__webpack_require__(/*! ./bug-dialog.component.css */ "./src/app/bug/bug-dialog/bug-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], BugDialogComponent);



/***/ }),

/***/ "./src/app/bug/bug.module.ts":
/*!***********************************!*\
  !*** ./src/app/bug/bug.module.ts ***!
  \***********************************/
/*! exports provided: BugModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugModule", function() { return BugModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bugs_bugs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bugs/bugs.component */ "./src/app/bug/bugs/bugs.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _status_dialog_status_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-dialog/status-dialog.component */ "./src/app/bug/status-dialog/status-dialog.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let BugModule = class BugModule {
};
BugModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _bugs_bugs_component__WEBPACK_IMPORTED_MODULE_3__["BugsComponent"],
            _status_dialog_status_dialog_component__WEBPACK_IMPORTED_MODULE_5__["StatusDialogComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"]
        ],
        exports: [
            _bugs_bugs_component__WEBPACK_IMPORTED_MODULE_3__["BugsComponent"],
            _status_dialog_status_dialog_component__WEBPACK_IMPORTED_MODULE_5__["StatusDialogComponent"],
        ]
    })
], BugModule);



/***/ }),

/***/ "./src/app/bug/bugs/bugs.component.css":
/*!*********************************************!*\
  !*** ./src/app/bug/bugs/bugs.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ag-theme-balham-dark {\n  background-color: #2d3436;\n  color: #F5F5F5;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  font-size: 12px; }\n  .ag-theme-balham-dark .ag-menu, .ag-theme-balham-dark .ag-theme-balham-dark.ag-dnd-ghost, .ag-theme-balham-dark .ag-cell-inline-editing, .ag-theme-balham-dark .ag-popup-editor, .ag-theme-balham-dark .ag-select-agg-func-popup, .ag-theme-balham-dark .ag-overlay-loading-center {\n    border: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-tab-header .ag-tab {\n    border: 1px solid transparent;\n    border-bottom-width: 0;\n    display: inline-block;\n    margin: 4px;\n    margin-bottom: 0;\n    padding: 4px 8px; }\n  .ag-theme-balham-dark .ag-tab-header .ag-tab.ag-tab-selected {\n    background-color: #2d3436;\n    border-bottom: 2px solid #00B0FF;\n    border-bottom: 2px solid #2d3436;\n    border-color: #424242; }\n  .ag-theme-balham-dark *:focus {\n    outline: none; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-1 {\n    padding-left: 20px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-1 {\n    padding-right: 20px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-1 {\n    padding-left: 28px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-1 {\n    padding-right: 28px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-2 {\n    padding-left: 40px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-2 {\n    padding-right: 40px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-2 {\n    padding-left: 56px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-2 {\n    padding-right: 56px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-3 {\n    padding-left: 60px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-3 {\n    padding-right: 60px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-3 {\n    padding-left: 84px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-3 {\n    padding-right: 84px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-4 {\n    padding-left: 80px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-4 {\n    padding-right: 80px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-4 {\n    padding-left: 112px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-4 {\n    padding-right: 112px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-5 {\n    padding-left: 100px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-5 {\n    padding-right: 100px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-5 {\n    padding-left: 140px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-5 {\n    padding-right: 140px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-6 {\n    padding-left: 120px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-6 {\n    padding-right: 120px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-6 {\n    padding-left: 168px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-6 {\n    padding-right: 168px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-7 {\n    padding-left: 140px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-7 {\n    padding-right: 140px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-7 {\n    padding-left: 196px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-7 {\n    padding-right: 196px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-8 {\n    padding-left: 160px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-8 {\n    padding-right: 160px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-8 {\n    padding-left: 224px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-8 {\n    padding-right: 224px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-9 {\n    padding-left: 180px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-9 {\n    padding-right: 180px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-9 {\n    padding-left: 252px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-9 {\n    padding-right: 252px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-10 {\n    padding-left: 200px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-10 {\n    padding-right: 200px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-10 {\n    padding-left: 280px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-10 {\n    padding-right: 280px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-11 {\n    padding-left: 220px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-11 {\n    padding-right: 220px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-11 {\n    padding-left: 308px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-11 {\n    padding-right: 308px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-12 {\n    padding-left: 240px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-12 {\n    padding-right: 240px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-12 {\n    padding-left: 336px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-12 {\n    padding-right: 336px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-13 {\n    padding-left: 260px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-13 {\n    padding-right: 260px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-13 {\n    padding-left: 364px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-13 {\n    padding-right: 364px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-14 {\n    padding-left: 280px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-14 {\n    padding-right: 280px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-14 {\n    padding-left: 392px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-14 {\n    padding-right: 392px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-15 {\n    padding-left: 300px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-15 {\n    padding-right: 300px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-15 {\n    padding-left: 420px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-15 {\n    padding-right: 420px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-16 {\n    padding-left: 320px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-16 {\n    padding-right: 320px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-16 {\n    padding-left: 448px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-16 {\n    padding-right: 448px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-17 {\n    padding-left: 340px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-17 {\n    padding-right: 340px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-17 {\n    padding-left: 476px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-17 {\n    padding-right: 476px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-18 {\n    padding-left: 360px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-18 {\n    padding-right: 360px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-18 {\n    padding-left: 504px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-18 {\n    padding-right: 504px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-19 {\n    padding-left: 380px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-19 {\n    padding-right: 380px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-19 {\n    padding-left: 532px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-19 {\n    padding-right: 532px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-20 {\n    padding-left: 400px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-20 {\n    padding-right: 400px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-20 {\n    padding-left: 560px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-20 {\n    padding-right: 560px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-21 {\n    padding-left: 420px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-21 {\n    padding-right: 420px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-21 {\n    padding-left: 588px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-21 {\n    padding-right: 588px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-22 {\n    padding-left: 440px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-22 {\n    padding-right: 440px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-22 {\n    padding-left: 616px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-22 {\n    padding-right: 616px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-23 {\n    padding-left: 460px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-23 {\n    padding-right: 460px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-23 {\n    padding-left: 644px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-23 {\n    padding-right: 644px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-24 {\n    padding-left: 480px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-24 {\n    padding-right: 480px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-24 {\n    padding-left: 672px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-24 {\n    padding-right: 672px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-25 {\n    padding-left: 500px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-25 {\n    padding-right: 500px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-25 {\n    padding-left: 700px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-25 {\n    padding-right: 700px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-26 {\n    padding-left: 520px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-26 {\n    padding-right: 520px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-26 {\n    padding-left: 728px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-26 {\n    padding-right: 728px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-27 {\n    padding-left: 540px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-27 {\n    padding-right: 540px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-27 {\n    padding-left: 756px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-27 {\n    padding-right: 756px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-28 {\n    padding-left: 560px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-28 {\n    padding-right: 560px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-28 {\n    padding-left: 784px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-28 {\n    padding-right: 784px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-29 {\n    padding-left: 580px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-29 {\n    padding-right: 580px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-29 {\n    padding-left: 812px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-29 {\n    padding-right: 812px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-30 {\n    padding-left: 600px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-30 {\n    padding-right: 600px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-30 {\n    padding-left: 840px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-30 {\n    padding-right: 840px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-31 {\n    padding-left: 620px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-31 {\n    padding-right: 620px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-31 {\n    padding-left: 868px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-31 {\n    padding-right: 868px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-32 {\n    padding-left: 640px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-32 {\n    padding-right: 640px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-32 {\n    padding-left: 896px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-32 {\n    padding-right: 896px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-33 {\n    padding-left: 660px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-33 {\n    padding-right: 660px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-33 {\n    padding-left: 924px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-33 {\n    padding-right: 924px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-34 {\n    padding-left: 680px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-34 {\n    padding-right: 680px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-34 {\n    padding-left: 952px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-34 {\n    padding-right: 952px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-35 {\n    padding-left: 700px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-35 {\n    padding-right: 700px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-35 {\n    padding-left: 980px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-35 {\n    padding-right: 980px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-36 {\n    padding-left: 720px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-36 {\n    padding-right: 720px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-36 {\n    padding-left: 1008px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-36 {\n    padding-right: 1008px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-37 {\n    padding-left: 740px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-37 {\n    padding-right: 740px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-37 {\n    padding-left: 1036px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-37 {\n    padding-right: 1036px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-38 {\n    padding-left: 760px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-38 {\n    padding-right: 760px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-38 {\n    padding-left: 1064px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-38 {\n    padding-right: 1064px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-39 {\n    padding-left: 780px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-39 {\n    padding-right: 780px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-39 {\n    padding-left: 1092px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-39 {\n    padding-right: 1092px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-40 {\n    padding-left: 800px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-40 {\n    padding-right: 800px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-40 {\n    padding-left: 1120px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-40 {\n    padding-right: 1120px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-41 {\n    padding-left: 820px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-41 {\n    padding-right: 820px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-41 {\n    padding-left: 1148px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-41 {\n    padding-right: 1148px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-42 {\n    padding-left: 840px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-42 {\n    padding-right: 840px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-42 {\n    padding-left: 1176px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-42 {\n    padding-right: 1176px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-43 {\n    padding-left: 860px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-43 {\n    padding-right: 860px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-43 {\n    padding-left: 1204px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-43 {\n    padding-right: 1204px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-44 {\n    padding-left: 880px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-44 {\n    padding-right: 880px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-44 {\n    padding-left: 1232px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-44 {\n    padding-right: 1232px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-45 {\n    padding-left: 900px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-45 {\n    padding-right: 900px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-45 {\n    padding-left: 1260px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-45 {\n    padding-right: 1260px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-46 {\n    padding-left: 920px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-46 {\n    padding-right: 920px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-46 {\n    padding-left: 1288px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-46 {\n    padding-right: 1288px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-47 {\n    padding-left: 940px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-47 {\n    padding-right: 940px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-47 {\n    padding-left: 1316px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-47 {\n    padding-right: 1316px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-48 {\n    padding-left: 960px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-48 {\n    padding-right: 960px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-48 {\n    padding-left: 1344px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-48 {\n    padding-right: 1344px; }\n  .ag-theme-balham-dark .ag-ltr .ag-toolpanel-indent-49 {\n    padding-left: 980px; }\n  .ag-theme-balham-dark .ag-rtl .ag-toolpanel-indent-49 {\n    padding-right: 980px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-indent-49 {\n    padding-left: 1372px; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-indent-49 {\n    padding-right: 1372px; }\n  .ag-theme-balham-dark .ag-ltr .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-balham-dark .ag-ltr .ag-cell {\n    border-right: none; }\n  .ag-theme-balham-dark .ag-ltr .ag-row.ag-cell-first-right-pinned, .ag-theme-balham-dark .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned {\n    border-left: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-ltr .ag-row.ag-cell-last-left-pinned, .ag-theme-balham-dark .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned {\n    border-right: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-balham-dark .ag-rtl .ag-cell {\n    border-left: none; }\n  .ag-theme-balham-dark .ag-rtl .ag-row.ag-cell-first-right-pinned, .ag-theme-balham-dark .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned {\n    border-left: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-rtl .ag-row.ag-cell-last-left-pinned, .ag-theme-balham-dark .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned {\n    border-right: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-value-change-delta {\n    padding-right: 2px; }\n  .ag-theme-balham-dark .ag-value-change-delta-up {\n    color: #43a047; }\n  .ag-theme-balham-dark .ag-value-change-delta-down {\n    color: #e53935; }\n  .ag-theme-balham-dark .ag-value-change-value {\n    background-color: transparent;\n    border-radius: 1px;\n    padding-left: 1px;\n    padding-right: 1px;\n    transition: background-color 1s; }\n  .ag-theme-balham-dark .ag-value-change-value-highlight {\n    background-color: rgba(22, 160, 133, 0.5);\n    transition: background-color 0.1s; }\n  .ag-theme-balham-dark .ag-header {\n    background-color: #1c1f20;\n    color: rgba(245, 245, 245, 0.64);\n    font-weight: 600;\n    font-size: 12px;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n    border-bottom: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-pinned-right-header {\n    border-left: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-pinned-left-header {\n    border-right: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-header-row {\n    border: none; }\n  .ag-theme-balham-dark .ag-row {\n    border-style: solid;\n    border-color: #424242;\n    border-width: 0; }\n  .ag-theme-balham-dark .ag-row:not(.ag-row-first) {\n      border-width: 1px 0 0; }\n  .ag-theme-balham-dark .ag-row.ag-row-last {\n      border-bottom-width: 1px; }\n  .ag-theme-balham-dark .ag-row-odd {\n    background-color: #262c2e; }\n  .ag-theme-balham-dark .ag-row-even {\n    background-color: #2d3436; }\n  .ag-theme-balham-dark .ag-horizontal-left-spacer {\n    border-right: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-horizontal-left-spacer.ag-scroller-corner {\n      border-right: none; }\n  .ag-theme-balham-dark .ag-horizontal-right-spacer {\n    border-left: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-horizontal-right-spacer.ag-scroller-corner {\n      border-left: none; }\n  .ag-theme-balham-dark .ag-row-hover {\n    background-color: #3d4749; }\n  .ag-theme-balham-dark .ag-numeric-cell {\n    text-align: right; }\n  .ag-theme-balham-dark .ag-header-cell-label {\n    display: flex;\n    height: 100%; }\n  .ag-theme-balham-dark .ag-header-cell-label > span {\n      float: left; }\n  .ag-theme-balham-dark .ag-header-cell-label .ag-header-icon {\n      background-position-y: 10px;\n      background-size: 14px 14px;\n      height: 100%;\n      margin: 0;\n      margin-left: 4px;\n      opacity: 0.87; }\n  .ag-theme-balham-dark .ag-header-cell-label .ag-header-cell-text {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n  .ag-theme-balham-dark .ag-numeric-header .ag-header-cell-label {\n    flex-direction: row-reverse;\n    float: right; }\n  .ag-theme-balham-dark .ag-numeric-header .ag-header-cell-label > span {\n      float: right; }\n  .ag-theme-balham-dark .ag-numeric-header .ag-header-cell-menu-button {\n    float: left; }\n  .ag-theme-balham-dark .ag-header-group-text {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .ag-theme-balham-dark .ag-header-cell,\n  .ag-theme-balham-dark .ag-header-group-cell {\n    border-style: solid;\n    border-color: #424242;\n    line-height: 32px;\n    padding-left: 12px;\n    padding-right: 12px;\n    border-width: 0; }\n  .ag-theme-balham-dark .ag-header-cell.ag-header-cell-moving,\n    .ag-theme-balham-dark .ag-header-group-cell.ag-header-cell-moving {\n      background-color: #2d3436; }\n  .ag-theme-balham-dark .ag-header-cell:not(.ag-header-group-cell-no-group),\n    .ag-theme-balham-dark .ag-header-group-cell:not(.ag-header-group-cell-no-group) {\n      border-top-width: 1px; }\n  .ag-theme-balham-dark .ag-header-row:first-child .ag-header-cell, .ag-theme-balham-dark .ag-header-row:first-child .ag-header-group-cell {\n    border-top-width: 0; }\n  .ag-theme-balham-dark .ag-cell {\n    line-height: 26px;\n    padding-left: 12px;\n    padding-right: 12px;\n    border: 1px solid transparent;\n    padding-left: 11px;\n    padding-right: 11px; }\n  .ag-theme-balham-dark .ag-row-drag {\n    float: left;\n    height: 100%;\n    width: 28px;\n    cursor: -webkit-grab;\n    cursor: grab; }\n  .ag-theme-balham-dark .ag-row-drag .ag-icon-row-drag {\n      display: block;\n      width: 100%;\n      height: 100%;\n      background-color: transparent;\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSAyLjV2MW0wIDJ2MW0wIDJ2MW0zLTd2MW0wIDJ2MW0wIDJ2MW0zLTd2MW0wIDJ2MW0wIDJ2MW0zLTd2MW0wIDJ2MW0wIDJ2MSIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px;\n      background-position-x: left;\n      background-position-y: 4px; }\n  .ag-theme-balham-dark .ag-row-dragging, .ag-theme-balham-dark .ag-row-dragging .ag-row-drag {\n    cursor: move; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-drag {\n    float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-row-drag .ag-icon-row-drag {\n      background-position-x: right; }\n  .ag-theme-balham-dark .ag-column-drag {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSAyLjV2MW0wIDJ2MW0wIDJ2MW0zLTd2MW0wIDJ2MW0wIDJ2MW0zLTd2MW0wIDJ2MW0wIDJ2MW0zLTd2MW0wIDJ2MW0wIDJ2MSIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    background-position-x: left;\n    background-position-y: 4px !important;\n    height: 100%;\n    min-width: 20px;\n    cursor: -webkit-grab;\n    cursor: grab; }\n  .ag-theme-balham-dark .ag-row-dragging {\n    opacity: 0.5;\n    z-index: 10000; }\n  .ag-theme-balham-dark .ag-ltr .ag-has-focus .ag-cell-focus, .ag-theme-balham-dark .ag-rtl .ag-has-focus .ag-cell-focus {\n    border: 1px solid #00B0FF;\n    outline: initial; }\n  .ag-theme-balham-dark .ag-header-cell-resize {\n    width: 8px; }\n  .ag-theme-balham-dark .ag-icon-aggregation {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMC41IDZWNC41aC01di41MzJhMSAxIDAgMCAwIC4zNi43NjhsMS43MTggMS40MzJhMSAxIDAgMCAxIDAgMS41MzZMNS44NiAxMC4yYTEgMSAwIDAgMC0uMzYuNzY4di41MzJoNVYxMCIvPjxyZWN0IHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHJ4PSIyIi8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-arrows {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNSAxNFYzTTIgOC41aDExbS03LjUgNGwyIDIgMi0ybTAtOGwtMi0yLTIgMm0tMiAybC0yIDIgMiAybTggMGwyLTItMi0yIiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-asc {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNSAxMlY0bTMgMi41bC0zLTMtMyAzIiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-checkbox-checked-readonly {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIyIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjUiPjx1c2UgZmlsbD0iIzJEMzQzNiIgeGxpbms6aHJlZj0iI2EiLz48cmVjdCBzdHJva2U9IiNFQ0YwRjEiIHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHJ4PSIyIi8+PHBhdGggc3Ryb2tlPSIjRUNGMEYxIiBkPSJNMTIgNWwtNS41IDUuNUw0IDgiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-checkbox-checked {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIyIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjMkQzNDM2IiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iI0VDRjBGMSIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48cGF0aCBzdHJva2U9IiNFQ0YwRjEiIGQ9Ik0xMiA1bC01LjUgNS41TDQgOCIvPjwvZz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-checkbox-indeterminate-readonly {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIyIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjUiPjx1c2UgZmlsbD0iIzJEMzQzNiIgeGxpbms6aHJlZj0iI2EiLz48cmVjdCBzdHJva2U9IiNFQ0YwRjEiIHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHJ4PSIyIi8+PHBhdGggZD0iTTQgOC41aDgiIHN0cm9rZT0iI0VDRjBGMSIvPjwvZz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-checkbox-indeterminate {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIyIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjMkQzNDM2IiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iI0VDRjBGMSIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48cGF0aCBkPSJNNCA4LjVoOCIgc3Ryb2tlPSIjRUNGMEYxIi8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-checkbox-unchecked-readonly {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIyIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjUiPjx1c2UgZmlsbD0iIzJEMzQzNiIgeGxpbms6aHJlZj0iI2EiLz48cmVjdCBzdHJva2U9IiNFQ0YwRjEiIHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHJ4PSIyIi8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-checkbox-unchecked {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIyIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjMkQzNDM2IiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iI0VDRjBGMSIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-column {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSAzLjV2OGgzdi04eiIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-columns {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNSAzLjV2OG0zLTh2OG0zLTh2OG0tOS04djgiIHN0cm9rZT0iI0VDRjBGMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-contracted {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkgNEw1IDhsNCA0IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-copy {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHg9IjQuNSIgeT0iNC41IiB3aWR0aD0iOCIgaGVpZ2h0PSI5IiByeD0iMiIvPjxwYXRoIGQ9Ik0xMSAyLjVINC41YTIgMiAwIDAgMC0yIDJWMTMiLz48L2c+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-cut {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuMzQ4IDQuOTQ4Yy4xNjEtLjM1LjI1Mi0uNzM1LjI1Mi0xLjE0OGEyLjggMi44IDAgMSAwLTUuNiAwIDIuOCAyLjggMCAwIDAgMi44IDIuOGMuNDEzIDAgLjc5OC0uMDkxIDEuMTQ4LS4yNTJMNi42IDggNC45NDggOS42NTJBMi43MjggMi43MjggMCAwIDAgMy44IDkuNGEyLjggMi44IDAgMSAwIDAgNS42IDIuOCAyLjggMCAwIDAgMi44LTIuOGMwLS40MTMtLjA5MS0uNzk4LS4yNTItMS4xNDhMOCA5LjRsNC45IDQuOUgxNXYtLjdMNi4zNDggNC45NDh6TTMuOCA1LjJhMS40IDEuNCAwIDEgMSAwLTIuOCAxLjQgMS40IDAgMCAxIDAgMi44em0wIDguNGExLjQgMS40IDAgMSAxIDAtMi44IDEuNCAxLjQgMCAwIDEgMCAyLjh6TTggOC4zNUEuMzQ3LjM0NyAwIDAgMSA3LjY1IDhjMC0uMTk2LjE1NC0uMzUuMzUtLjM1LjE5NiAwIC4zNS4xNTQuMzUuMzUgMCAuMTk2LS4xNTQuMzUtLjM1LjM1em00LjktNi42NUw4LjcgNS45bDEuNCAxLjRMMTUgMi40di0uN2gtMi4xeiIgZmlsbD0iI0VDRjBGMSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-desc {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNSAxMVYzbS0zIDUuNWwzIDMgMy0zIiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-expanded {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgMTJsNC00LTQtNCIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-eye-slash {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik04IDMuNjI1QTYuODk5IDYuODk5IDAgMCAwIDEuNTgzIDggNi44OTkgNi44OTkgMCAwIDAgOCAxMi4zNzUgNi44OTkgNi44OTkgMCAwIDAgMTQuNDE3IDggNi44OTkgNi44OTkgMCAwIDAgOCAzLjYyNXoiLz48cGF0aCBkPSJNOCAxMC45MTdhMi45MTggMi45MTggMCAwIDEgMC01LjgzNCAyLjkxOCAyLjkxOCAwIDAgMSAwIDUuODM0eiIvPjxwYXRoIGQ9Ik0zLjUgMy41bDkgOSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvZz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-eye {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik04IDMuNjI1QTYuODk5IDYuODk5IDAgMCAwIDEuNTgzIDggNi44OTkgNi44OTkgMCAwIDAgOCAxMi4zNzUgNi44OTkgNi44OTkgMCAwIDAgMTQuNDE3IDggNi44OTkgNi44OTkgMCAwIDAgOCAzLjYyNXoiLz48cGF0aCBkPSJNOCAxMC45MTdhMi45MTggMi45MTggMCAwIDEgMC01LjgzNCAyLjkxOCAyLjkxOCAwIDAgMSAwIDUuODM0eiIvPjwvZz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-filter {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSAzLjVoOXYuNTg2YTEgMSAwIDAgMS0uMjkzLjcwN0w5LjI5MyA3LjcwN0ExIDEgMCAwIDAgOSA4LjQxNFYxMGwtMiAxLjVWOC40MTRhMSAxIDAgMCAwLS4yOTMtLjcwN0wzLjc5MyA0Ljc5M2ExIDEgMCAwIDEtLjI5My0uNzA3VjMuNXoiIHN0cm9rZT0iI0VDRjBGMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-group {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zLjUgNS41aDFtMSAyaDFtMiAwaDRtLTcgMmgxbTIgMGg0bS02LTRoNiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjxyZWN0IHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHJ4PSIyIi8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-indeterminate {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik04IDQuNjI1Yy0yLjkxNyAwLTUuNDA4LjgxNC02LjQxNyAzLjM3NSAxLjAxIDIuNTYgMy41IDMuMzc1IDYuNDE3IDMuMzc1czUuNDA4LS44MTQgNi40MTctMy4zNzVjLTEuMDEtMi41Ni0zLjUtMy4zNzUtNi40MTctMy4zNzV6Ii8+PHBhdGggZD0iTTggOS45MTdDNi4zOSA5LjkxNyA1LjA4MyA5LjYxIDUuMDgzIDhTNi4zOSA2LjA4MyA4IDYuMDgzYzEuNjEgMCAyLjkxNy4zMDcgMi45MTcgMS45MTdTOS42MSA5LjkxNyA4IDkuOTE3eiIvPjwvZz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-left {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSA4LjVsNC00TDggNiA2LjUgNy41aDd2MmgtN0w4IDExbC0xLjUgMS41eiIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-loading {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjxwYXRoIGQ9Ik03LjUgMTAuNXYzIiBvcGFjaXR5PSIuOCIvPjxwYXRoIGQ9Ik0xMC41IDcuNWgzIiBvcGFjaXR5PSIuNiIvPjxwYXRoIGQ9Ik0xLjUgNy41aDMiLz48cGF0aCBkPSJNNy41IDEuNXYzIiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Ik05LjUgNS41TDEyIDMiIG9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTkuNSA5LjVMMTIgMTIiIG9wYWNpdHk9Ii43Ii8+PHBhdGggZD0iTTUuNSA5LjVMMyAxMiIgb3BhY2l0eT0iLjkiLz48cGF0aCBkPSJNNS41IDUuNUwzIDMiIG9wYWNpdHk9Ii4zIi8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-menu {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSA0LjVoOW0tOSAzaDltLTkgM2g5IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-minus {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSA2LjVoMTF2MmgtMTF6IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-none {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgMTJWNG0zIDIuNWwtMy0zLTMgM20tNCA0LjVWM20tMyA1LjVsMyAzIDMtMyIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-not-allowed {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuOSAxMS4wMTJBMy43NSAzLjc1IDAgMCAwIDExLjAxMiA1LjlsLTUuMTE0IDUuMTEzek00LjQ4NyA5LjYwMUw5LjYgNC40ODhBMy43NSAzLjc1IDAgMCAwIDQuNDg4IDkuNnpNNy43NSAxMy41YTUuNzUgNS43NSAwIDEgMSAwLTExLjUgNS43NSA1Ljc1IDAgMCAxIDAgMTEuNXoiIHN0cm9rZT0iI0VDRjBGMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-paste {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDNjMC0uNS0uNS0xLjUtMi0xLjVTNiAyLjUgNiAzSDRhMiAyIDAgMCAwLTIgMnY3YTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjVhMiAyIDAgMCAwLTItMmgtMnptLTIgLjI3M2MuMzY3IDAgLjY2Ny4yODYuNjY3LjYzNiAwIC4zNS0uMy42MzYtLjY2Ny42MzYtLjM2NyAwLS42NjctLjI4Ni0uNjY3LS42MzYgMC0uMzUuMy0uNjM2LjY2Ny0uNjM2ek0xMiAxM0g0YTEgMSAwIDAgMS0xLTFWNWExIDEgMCAwIDEgMS0xaDF2Mmg2VjRoMWExIDEgMCAwIDEgMSAxdjdhMSAxIDAgMCAxLTEgMXoiIGZpbGw9IiNFQ0YwRjEiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-pin {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAxMy41bDQtNE0xNCA2Yy0uMzkuNTI5LS43MjQuODYyLTEgMXMtLjYxLjEzOC0xIDBsLTIgMmMuMTM4LjkyLjEzOCAxLjU4NiAwIDItLjEzOC40MTQtLjQ3MS43NDgtMSAxTDQgN2MuMDgtLjQ3MS40MTQtLjgwNSAxLTEgLjU4Ni0uMTk1IDEuMjUyLS4xOTUgMiAwbDItMmMtLjE5NS0uMjc2LS4xOTUtLjYxIDAtMXMuNTI5LS43MjQgMS0xbDQgNHoiIHN0cm9rZT0iI0VDRjBGMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-pivot {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMy41IDQuNWgtOW0wIDB2OSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjxwYXRoIGQ9Ik03LjUgMTIuNWwtMS0xIDEtMW01LTNsLTEtMS0xIDEiLz48cGF0aCBkPSJNNC41IDExLjVoLTJtNi05djJtLTMtMnYybTYtMnYyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PHBhdGggZD0iTTExLjUgNi41djNhMiAyIDAgMCAxLTIgMmgtMyIvPjxwYXRoIGQ9Ik00LjUgOC41aC0ybTItM2gtMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjxyZWN0IHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHJ4PSIyIi8+PC9nPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-plus {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSA2LjVoNHYtNGgydjRoNHYyaC00djRoLTJ2LTRoLTR6IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-right {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjUgNy41bC00IDRMOCAxMGwxLjUtMS41aC03di0yaDdMOCA1bDEuNS0xLjV6IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-small-left {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggNEw0IDhsNCA0IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-small-right {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggMTJsNC00LTQtNCIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-small-up {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDhMOCA0IDQgOCIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-small-down {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgOGw0IDQgNC00IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-tick {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDZsLTUuNSA1LjVMNCA5IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-cross {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjUgNS41bC02IDZtMC02bDYgNiIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-tree-open {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgN2w0IDQgNC00IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-tree-closed {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgMTJsNC00LTQtNCIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-icon-tree-indeterminate {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSA3LjVoOSIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    display: inline-block; }\n  .ag-theme-balham-dark .ag-header-cell-menu-button .ag-icon-menu {\n    display: block;\n    height: 32px; }\n  .ag-theme-balham-dark .ag-icon-checkbox-checked:empty {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJhIiB4PSIxIiB5PSIxIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIyIi8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjMkQzNDM2IiB4bGluazpocmVmPSIjYSIvPjxyZWN0IHN0cm9rZT0iIzAwQjBGRiIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMyIgcng9IjIiLz48cGF0aCBzdHJva2U9IiMwMEIwRkYiIGQ9Ik0xMiA1bC01LjUgNS41TDQgOCIvPjwvZz48L3N2Zz4=); }\n  .ag-theme-balham-dark .ag-menu {\n    background: #2d3436;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    padding: 0;\n    z-index: 5; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-list {\n      cursor: default;\n      margin-bottom: 4px;\n      margin-top: 4px;\n      width: 100%; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-option {\n      line-height: 16px;\n      padding-left: 8px;\n      padding-right: 8px; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-option > span {\n        display: table-cell;\n        vertical-align: middle; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-option-active {\n      background-color: #3d4749; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-option-disabled {\n      opacity: 0.5; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-option-icon {\n      padding-left: 4px;\n      padding-right: 4px; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-option-icon span {\n        height: 16px;\n        line-height: 0;\n        margin-top: 4px; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-option-shortcut {\n      padding-left: 8px; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-separator {\n      margin-left: -4px; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-separator > span {\n        background-image: url(\"data:image/svg+xml,%3Csvg%20width%3D'1'%20height%3D'8px'%20viewBox%3D'0%200%201%208px'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cline%20x1%3D'0'%20y1%3D'4px'%20x2%3D'1'%20y2%3D'4px'%20stroke-width%3D'1'%20stroke%3D'%23424242'%2F%3E%3C%2Fsvg%3E\");\n        height: 8px; }\n  .ag-theme-balham-dark .ag-menu .ag-menu-option-popup-pointer {\n      width: 24px; }\n  .ag-theme-balham-dark.ag-dnd-ghost {\n    background: #2d3436;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    border: 1px solid #424242;\n    color: rgba(245, 245, 245, 0.64);\n    font-weight: 600;\n    font-size: 12px;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n    height: 32px !important;\n    line-height: 32px;\n    margin: 0;\n    padding: 0 8px;\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n    z-index: 10000; }\n  .ag-theme-balham-dark.ag-dnd-ghost span,\n    .ag-theme-balham-dark.ag-dnd-ghost div {\n      float: left;\n      height: 100%;\n      margin: 0;\n      padding: 0; }\n  .ag-theme-balham-dark.ag-dnd-ghost .ag-dnd-ghost-icon {\n      margin-right: 4px;\n      opacity: 0.87; }\n  .ag-theme-balham-dark .ag-tab-header {\n    background: #1c1f20;\n    min-width: 220px;\n    width: 100%; }\n  .ag-theme-balham-dark .ag-tab-header .ag-tab {\n      border-bottom: 2px solid transparent;\n      height: 16px;\n      text-align: center;\n      vertical-align: middle; }\n  .ag-theme-balham-dark .ag-tab-header .ag-tab.ag-tab-selected .ag-icon-filter {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSAzLjVoOXYuNTg2YTEgMSAwIDAgMS0uMjkzLjcwN0w5LjI5MyA3LjcwN0ExIDEgMCAwIDAgOSA4LjQxNFYxMGwtMiAxLjVWOC40MTRhMSAxIDAgMCAwLS4yOTMtLjcwN0wzLjc5MyA0Ljc5M2ExIDEgMCAwIDEtLjI5My0uNzA3VjMuNXoiIHN0cm9rZT0iIzAwQjBGRiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n        display: inline-block; }\n  .ag-theme-balham-dark .ag-tab-header .ag-tab.ag-tab-selected .ag-icon-columns {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNSAzLjV2OG0zLTh2OG0zLTh2OG0tOS04djgiIHN0cm9rZT0iIzAwQjBGRiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvc3ZnPg==);\n        display: inline-block; }\n  .ag-theme-balham-dark .ag-tab-header .ag-tab.ag-tab-selected .ag-icon-menu {\n        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSA0LjVoOW0tOSAzaDltLTkgM2g5IiBzdHJva2U9IiMwMEIwRkYiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=);\n        display: inline-block; }\n  .ag-theme-balham-dark .ag-tab-body {\n    padding: 4px 0; }\n  .ag-theme-balham-dark .ag-tab-body .ag-filter-select {\n      margin: 4px;\n      width: calc(100% - 8px); }\n  .ag-theme-balham-dark .ag-tab-body .ag-menu-list {\n      margin-bottom: 0;\n      margin-top: 0; }\n  .ag-theme-balham-dark .ag-tab-body .ag-menu-list > div:first-child > span {\n        padding-top: 0; }\n  .ag-theme-balham-dark .ag-tab-body .ag-menu-list > div:last-child > span {\n        padding-bottom: 0; }\n  .ag-theme-balham-dark .ag-tab-body .ag-menu-list > div:last-child > .ag-menu-option-popup-pointer {\n        background-position-y: 0; }\n  .ag-theme-balham-dark .ag-filter-select {\n    margin: 4px;\n    width: calc(100% - 8px); }\n  .ag-theme-balham-dark .ag-filter input[type=\"radio\"] {\n    margin: 0 3px 0 6px;\n    width: 12px;\n    height: 17px;\n    vertical-align: top; }\n  .ag-theme-balham-dark .ag-filter input[type=\"text\"],\n  .ag-theme-balham-dark .ag-filter input[type=\"date\"] {\n    padding-left: 4px; }\n  .ag-theme-balham-dark .ag-filter input[type=\"text\"]:disabled,\n    .ag-theme-balham-dark .ag-filter input[type=\"date\"]:disabled {\n      color: rgba(245, 245, 245, 0.38);\n      background-color: rgba(48, 46, 46, 0.3); }\n  .ag-theme-balham-dark .ag-filter label {\n    display: block;\n    padding-left: 4px; }\n  .ag-theme-balham-dark .ag-filter .ag-set-filter-list {\n    height: 182px;\n    padding-top: 4px; }\n  .ag-theme-balham-dark .ag-filter .ag-filter-header-container {\n    height: 28px; }\n  .ag-theme-balham-dark .ag-filter .ag-filter-header-container:nth-child(2) {\n    border-bottom: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-filter .ag-filter-checkbox {\n    float: left;\n    height: 28px;\n    margin-right: 4px;\n    padding-top: 2px; }\n  .ag-theme-balham-dark .ag-filter .ag-filter-value {\n    height: 28px;\n    line-height: 14px; }\n  .ag-theme-balham-dark .ag-filter .ag-filter-apply-panel {\n    display: flex;\n    justify-content: flex-end;\n    padding: 4px;\n    padding-top: 8px; }\n  .ag-theme-balham-dark .ag-filter .ag-filter-apply-panel button + button {\n      margin-left: 8px; }\n  .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column-group,\n  .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column {\n    height: 16px;\n    line-height: 16px;\n    margin-left: 0; }\n  .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column-group span,\n    .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column span {\n      float: left;\n      height: 100%; }\n  .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-indent,\n    .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-indent {\n      width: 8px; }\n  .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox,\n    .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons,\n    .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox,\n    .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n      margin-left: 4px;\n      margin-right: 4px; }\n  .ag-theme-balham-dark .ag-column-select-panel .ag-primary-cols-list-panel {\n    padding-top: 4px; }\n  .ag-theme-balham-dark .ag-column-select-panel .ag-primary-cols-list-panel > div {\n      cursor: pointer; }\n  .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n    margin-left: 24px; }\n  .ag-theme-balham-dark .ag-filter-filter {\n    margin-bottom: 4px; }\n  .ag-theme-balham-dark .ag-primary-cols-header-panel {\n    border-bottom: 1px solid #424242;\n    height: 32px;\n    padding-top: 4px; }\n  .ag-theme-balham-dark .ag-primary-cols-header-panel > div {\n      cursor: pointer;\n      margin: 0 4px;\n      padding-top: 2px; }\n  .ag-theme-balham-dark .ag-primary-cols-header-panel .ag-filter-body {\n      margin-left: 4px;\n      margin-right: 4px; }\n  .ag-theme-balham-dark .ag-group-child-count::before {\n    content: \" \"; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper {\n    border-right: 0; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-filter-panel {\n      width: 100%; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance {\n        color: rgba(245, 245, 245, 0.64);\n        font-weight: 600;\n        flex: auto;\n        flex-direction: column;\n        flex-wrap: nowrap;\n        display: flex;\n        flex-flow: column nowrap; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header {\n          padding: 5px 0 5px 5px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header > div {\n            margin: auto 0; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-body-wrapper {\n        padding-top: 5px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n        border: 1px solid #424242;\n        border-left: 0;\n        border-right: 0;\n        padding: 4px 0; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-pivot-mode-panel {\n      border-bottom: 1px solid #424242;\n      height: 32px;\n      line-height: 32px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-pivot-mode-panel span {\n        float: left;\n        height: 100%; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n        margin-left: 4px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select .ag-checkbox-label {\n          margin-left: 4px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-select-panel {\n      border-bottom: 1px solid #424242;\n      padding-bottom: 3px;\n      padding-top: 0; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop {\n      border-bottom: 1px solid #424242;\n      clear: both;\n      overflow: auto;\n      padding: 4px 0;\n      padding-bottom: 8px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop .ag-icon {\n        float: left;\n        height: 20px;\n        margin: 0 4px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-title {\n        clear: right;\n        float: left;\n        height: 20px;\n        line-height: 20px;\n        width: calc(100% - 24px); }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n        clear: both;\n        color: rgba(245, 245, 245, 0.38);\n        font-weight: 600;\n        font-size: 12px;\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n        line-height: 8px;\n        padding-left: 16px;\n        padding-right: 4px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop:last-child {\n        border-bottom: 0; }\n  .ag-theme-balham-dark .ag-filter-icon:empty {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMuNSAzLjVoOXYuNTg2YTEgMSAwIDAgMS0uMjkzLjcwN0w5LjI5MyA3LjcwN0ExIDEgMCAwIDAgOSA4LjQxNFYxMGwtMiAxLjVWOC40MTRhMSAxIDAgMCAwLS4yOTMtLjcwN0wzLjc5MyA0Ljc5M2ExIDEgMCAwIDEtLjI5My0uNzA3VjMuNXoiIHN0cm9rZT0iI0VDRjBGMSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-sort-ascending-icon:empty {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNSAxMlY0bTMgMi41bC0zLTMtMyAzIiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-sort-descending-icon:empty {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNSAxMVYzbS0zIDUuNWwzIDMgMy0zIiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-sort-none-icon:empty {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgMTJWNG0zIDIuNWwtMy0zLTMgM20tNCA0LjVWM20tMyA1LjVsMyAzIDMtMyIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n    margin-left: 0;\n    margin-right: 4px; }\n  .ag-theme-balham-dark .ag-paging-panel {\n    align-items: center;\n    border-top: 1px solid #424242;\n    color: rgba(245, 245, 245, 0.64);\n    display: flex;\n    height: 32px;\n    justify-content: flex-end;\n    padding: 0 12px; }\n  .ag-theme-balham-dark .ag-paging-panel > span {\n      margin-left: 16px; }\n  .ag-theme-balham-dark button[ref=\"btFirst\"] {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDRMOCA4bDQgNE00LjUgNHY4IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    overflow: hidden;\n    text-indent: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0;\n    opacity: 0.64;\n    padding: 0; }\n  .ag-theme-balham-dark button[ref=\"btFirst\"][disabled] {\n      opacity: 0.38; }\n  .ag-theme-balham-dark button[ref=\"btPrevious\"] {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkgNEw1IDhsNCA0IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    overflow: hidden;\n    text-indent: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0;\n    opacity: 0.64;\n    padding: 0; }\n  .ag-theme-balham-dark button[ref=\"btPrevious\"][disabled] {\n      opacity: 0.38; }\n  .ag-theme-balham-dark button[ref=\"btLast\"] {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgMTJsNC00LTQtNG03LjUgMHY4IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    overflow: hidden;\n    text-indent: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0;\n    opacity: 0.64;\n    padding: 0; }\n  .ag-theme-balham-dark button[ref=\"btLast\"][disabled] {\n      opacity: 0.38; }\n  .ag-theme-balham-dark button[ref=\"btNext\"] {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgMTJsNC00LTQtNCIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px;\n    overflow: hidden;\n    text-indent: 100%;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    border: 0;\n    opacity: 0.64;\n    padding: 0; }\n  .ag-theme-balham-dark button[ref=\"btNext\"][disabled] {\n      opacity: 0.38; }\n  .ag-theme-balham-dark .ag-rtl button[ref=\"btFirst\"] {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgMTJsNC00LTQtNG03LjUgMHY4IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-rtl button[ref=\"btPrevious\"] {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgMTJsNC00LTQtNCIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-rtl button[ref=\"btLast\"] {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDRMOCA4bDQgNE00LjUgNHY4IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-rtl button[ref=\"btNext\"] {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkgNEw1IDhsNCA0IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-row-selected {\n    background-color: #005880; }\n  .ag-theme-balham-dark .ag-cell-range-selected:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.2); }\n  .ag-theme-balham-dark .ag-cell-range-selected-1:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.3); }\n  .ag-theme-balham-dark .ag-cell-range-selected-2:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.4); }\n  .ag-theme-balham-dark .ag-cell-range-selected-3:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.5); }\n  .ag-theme-balham-dark .ag-cell-range-selected-4:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.6); }\n  .ag-theme-balham-dark .ag-cell-inline-editing {\n    padding: 12px;\n    height: 40px;\n    z-index: 2; }\n  .ag-theme-balham-dark .ag-cell-inline-editing, .ag-theme-balham-dark .ag-popup-editor {\n    background: #2d3436;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    background-color: #1c1f20; }\n  .ag-theme-balham-dark .ag-cell-inline-editing input[type=\"text\"]:disabled,\n    .ag-theme-balham-dark .ag-cell-inline-editing input[type=\"tel\"]:disabled,\n    .ag-theme-balham-dark .ag-cell-inline-editing input[type=\"date\"]:disabled,\n    .ag-theme-balham-dark .ag-cell-inline-editing input[type=\"datetime-local\"]:disabled, .ag-theme-balham-dark .ag-popup-editor input[type=\"text\"]:disabled,\n    .ag-theme-balham-dark .ag-popup-editor input[type=\"tel\"]:disabled,\n    .ag-theme-balham-dark .ag-popup-editor input[type=\"date\"]:disabled,\n    .ag-theme-balham-dark .ag-popup-editor input[type=\"datetime-local\"]:disabled {\n      color: rgba(245, 245, 245, 0.38);\n      background-color: rgba(48, 46, 46, 0.3); }\n  .ag-theme-balham-dark .ag-cell-inline-editing select, .ag-theme-balham-dark .ag-popup-editor select {\n      height: auto; }\n  .ag-theme-balham-dark .ag-popup-editor {\n    z-index: 1;\n    padding: 0; }\n  .ag-theme-balham-dark .ag-popup-editor .ag-large-textarea textarea {\n      height: auto;\n      padding: 12px; }\n  .ag-theme-balham-dark .ag-popup-editor .ag-large-textarea textarea:disabled {\n        color: rgba(245, 245, 245, 0.38);\n        background-color: rgba(48, 46, 46, 0.3); }\n  .ag-theme-balham-dark .ag-rich-select {\n    background-color: #1c1f20;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgN2w0IDQgNC00IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position-x: calc(100% - 4px);\n    background-position-y: 8px;\n    background-repeat: no-repeat; }\n  .ag-theme-balham-dark .ag-rich-select .ag-rich-select-list {\n      height: 182px; }\n  .ag-theme-balham-dark .ag-rich-select .ag-rich-select-value {\n      height: 28px;\n      line-height: 28px;\n      padding-left: 12px; }\n  .ag-theme-balham-dark .ag-rich-select .ag-virtual-list-item {\n      cursor: default;\n      height: 28px;\n      line-height: 28px; }\n  .ag-theme-balham-dark .ag-rich-select .ag-virtual-list-item:hover {\n        background-color: #3d4749; }\n  .ag-theme-balham-dark .ag-rich-select .ag-rich-select-row {\n      padding-left: 12px; }\n  .ag-theme-balham-dark .ag-rich-select .ag-rich-select-row-selected {\n      background-color: #005880; }\n  .ag-theme-balham-dark .ag-floating-filter-body {\n    float: left;\n    height: 100%;\n    margin-right: 0;\n    width: calc(100% - 24px); }\n  .ag-theme-balham-dark .ag-floating-filter-body input:disabled {\n      color: rgba(245, 245, 245, 0.38);\n      background-color: rgba(48, 46, 46, 0.3); }\n  .ag-theme-balham-dark .ag-floating-filter-full-body input:disabled {\n    color: rgba(245, 245, 245, 0.38);\n    background-color: rgba(48, 46, 46, 0.3); }\n  .ag-theme-balham-dark .ag-floating-filter-button {\n    float: right;\n    line-height: 16px;\n    margin-top: 10px; }\n  .ag-theme-balham-dark .ag-floating-filter-button button {\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      background: transparent;\n      border: 0;\n      height: 16px;\n      padding: 0;\n      width: 16px; }\n  .ag-theme-balham-dark .ag-cell-label-container {\n    height: 100%; }\n  .ag-theme-balham-dark .ag-tooltip {\n    background-color: #1c1f20;\n    color: #F5F5F5;\n    border-radius: 2px;\n    padding: 5px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #34393b;\n    transition: opacity 1s; }\n  .ag-theme-balham-dark .ag-tooltip.ag-tooltip-hiding {\n      opacity: 0; }\n  .ag-theme-balham-dark .ag-header-group-cell-label {\n    height: 100%; }\n  .ag-theme-balham-dark .ag-header-group-cell-label span {\n      float: left;\n      height: 100%; }\n  .ag-theme-balham-dark .ag-header-select-all {\n    height: 100%;\n    margin-right: 12px; }\n  .ag-theme-balham-dark .ag-header-select-all span {\n      height: 100%; }\n  .ag-theme-balham-dark .ag-header-select-all:not(.ag-hidden) + .ag-cell-label-container {\n    float: left;\n    width: calc(100% - 16px - 12px); }\n  .ag-theme-balham-dark .ag-selection-checkbox ~ .ag-cell-value:not(:empty), .ag-theme-balham-dark .ag-selection-checkbox + .ag-group-value:not(:empty),\n  .ag-theme-balham-dark .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty),\n  .ag-theme-balham-dark .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty),\n  .ag-theme-balham-dark .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty),\n  .ag-theme-balham-dark .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty),\n  .ag-theme-balham-dark .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty),\n  .ag-theme-balham-dark .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty) {\n    display: inline-block;\n    margin-left: 12px; }\n  .ag-theme-balham-dark .ag-selection-checkbox ~ .ag-group-checkbox,\n  .ag-theme-balham-dark .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox,\n  .ag-theme-balham-dark .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox,\n  .ag-theme-balham-dark .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox {\n    margin-left: 12px; }\n  .ag-theme-balham-dark .ag-selection-checkbox span {\n    position: relative;\n    top: 2px; }\n  .ag-theme-balham-dark .ag-group-expanded .ag-icon-contracted:empty {\n    background-color: transparent;\n    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgN2w0IDQgNC00IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 16px 16px;\n    height: 16px;\n    opacity: 0.87;\n    width: 16px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal {\n    background-color: #1c1f20;\n    height: 28px;\n    line-height: 16px;\n    padding-left: 12px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal.ag-width-half {\n      margin-bottom: -5px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal span {\n      float: left;\n      height: 100%; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal > div:first-child {\n      float: left;\n      height: 100%; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal .ag-icon-group,\n    .ag-theme-balham-dark .ag-column-drop-horizontal .ag-icon-pivot {\n      margin-right: 12px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal .ag-right-arrow {\n      background-color: transparent;\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjUgNy41bC00IDRMOCAxMGwxLjUtMS41aC03di0yaDdMOCA1bDEuNS0xLjV6IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal .ag-left-arrow {\n      background-color: transparent;\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSA4LjVsNC00TDggNiA2LjUgNy41aDd2MmgtN0w4IDExbC0xLjUgMS41eiIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal .ag-left-arrow,\n    .ag-theme-balham-dark .ag-column-drop-horizontal .ag-right-arrow {\n      overflow: hidden;\n      text-indent: 100%;\n      height: 100%;\n      margin: 0 4px;\n      opacity: 0.64; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal .ag-column-drop-empty-message {\n      height: 100%;\n      line-height: 28px;\n      opacity: 0.38; }\n  .ag-theme-balham-dark .ag-column-drop-cell {\n    background: #32393c;\n    border-radius: 16px;\n    height: 16px !important;\n    margin-top: 4px;\n    padding: 0 2px; }\n  .ag-theme-balham-dark .ag-column-drop-cell .ag-column-drop-cell-text {\n      height: 100%;\n      line-height: 16px;\n      margin: 0 4px; }\n  .ag-theme-balham-dark .ag-column-drop-cell .ag-column-drop-cell-button {\n      background-color: transparent;\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMC41IDQuNWwtNiA2Ii8+PGNpcmNsZSBjeD0iNy41IiBjeT0iNy41IiByPSI1LjUiLz48cGF0aCBkPSJNNC41IDQuNWw2IDYiLz48L2c+PC9zdmc+);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px;\n      overflow: hidden;\n      text-indent: 100%;\n      min-width: 16px;\n      height: 100%;\n      margin: 0 2px;\n      opacity: 0.64; }\n  .ag-theme-balham-dark .ag-column-drop-cell .ag-column-drop-cell-button:hover {\n        opacity: 0.87; }\n  .ag-theme-balham-dark .ag-column-drop-cell .ag-column-drag {\n      margin-left: 8px;\n      margin-top: 2px;\n      width: 16px; }\n  .ag-theme-balham-dark .ag-select-agg-func-popup {\n    background: #2d3436;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px;\n    background: #2d3436;\n    height: 70px;\n    padding: 0; }\n  .ag-theme-balham-dark .ag-select-agg-func-popup .ag-virtual-list-item {\n      cursor: default;\n      line-height: 20px;\n      padding-left: 8px; }\n  .ag-theme-balham-dark .ag-set-filter-list,\n  .ag-theme-balham-dark .ag-menu-column-select-wrapper {\n    width: auto; }\n  .ag-theme-balham-dark .ag-column-drop-vertical > .ag-column-drop-cell {\n    float: left;\n    margin-bottom: 4px;\n    margin-left: 4px;\n    margin-top: 0; }\n  .ag-theme-balham-dark .ag-cell-data-changed {\n    background-color: rgba(22, 160, 133, 0.5) !important; }\n  .ag-theme-balham-dark .ag-cell-data-changed-animation {\n    background-color: transparent;\n    transition: background-color 1s; }\n  .ag-theme-balham-dark .ag-row-stub {\n    background-color: inherit; }\n  .ag-theme-balham-dark .ag-stub-cell {\n    padding-left: 12px;\n    padding-top: 4px; }\n  .ag-theme-balham-dark .ag-stub-cell .ag-loading-icon {\n      float: left;\n      height: 100%; }\n  .ag-theme-balham-dark .ag-stub-cell .ag-loading-text {\n      float: left;\n      height: 100%;\n      margin-left: 4px;\n      margin-top: 4px; }\n  .ag-theme-balham-dark .ag-floating-top {\n    border-bottom: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-floating-bottom {\n    border-top: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-floating-top, .ag-theme-balham-dark .ag-floating-bottom {\n    background-color: inherit; }\n  .ag-theme-balham-dark .ag-floating-top .ag-row, .ag-theme-balham-dark .ag-floating-bottom .ag-row {\n      background-color: inherit; }\n  .ag-theme-balham-dark .ag-rtl {\n    text-align: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-numeric-cell {\n      text-align: left; }\n  .ag-theme-balham-dark .ag-rtl .ag-header-cell-menu-button {\n      float: left; }\n  .ag-theme-balham-dark .ag-rtl .ag-header-cell-label > span {\n      float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-header-cell-label .ag-header-icon {\n      margin-top: 2px; }\n  .ag-theme-balham-dark .ag-rtl .ag-numeric-header .ag-header-cell-menu-button {\n      float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-numeric-header .ag-header-cell-label {\n      float: left; }\n  .ag-theme-balham-dark .ag-rtl .ag-numeric-header .ag-header-cell-label > span {\n        float: left; }\n  .ag-theme-balham-dark .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel span {\n      float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n      margin-right: 4px; }\n  .ag-theme-balham-dark .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select .ag-checkbox-label {\n        margin-right: 4px; }\n  .ag-theme-balham-dark .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-icon {\n      float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-title {\n      clear: left;\n      float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n      padding-left: 4px;\n      padding-right: 16px; }\n  .ag-theme-balham-dark .ag-rtl .ag-filter-checkbox {\n      float: right;\n      margin-left: 4px; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group span,\n    .ag-theme-balham-dark .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column span {\n      float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox,\n    .ag-theme-balham-dark .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons,\n    .ag-theme-balham-dark .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox,\n    .ag-theme-balham-dark .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n      margin-left: 4px;\n      margin-right: 4px; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n      margin-left: 0;\n      margin-right: 24px; }\n  .ag-theme-balham-dark .ag-rtl .ag-icon-tree-closed {\n      background-color: transparent;\n      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkgNEw1IDhsNCA0IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: 16px 16px;\n      height: 16px;\n      opacity: 0.87;\n      width: 16px; }\n  .ag-theme-balham-dark .ag-rtl .ag-header-group-cell-label {\n      height: 100%; }\n  .ag-theme-balham-dark .ag-rtl .ag-header-group-cell-label span {\n        float: right;\n        height: 100%; }\n  .ag-theme-balham-dark .ag-rtl .ag-header-select-all:not(.ag-hidden) + .ag-cell-label-container {\n      float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-header-select-all {\n      margin-left: 12px;\n      margin-right: 0; }\n  .ag-theme-balham-dark .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), .ag-theme-balham-dark .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty),\n    .ag-theme-balham-dark .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty),\n    .ag-theme-balham-dark .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty),\n    .ag-theme-balham-dark .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty),\n    .ag-theme-balham-dark .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty),\n    .ag-theme-balham-dark .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty),\n    .ag-theme-balham-dark .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {\n      display: inline-block;\n      margin-right: 12px;\n      margin-left: initial; }\n  .ag-theme-balham-dark .ag-rtl .ag-selection-checkbox + .ag-group-checkbox,\n    .ag-theme-balham-dark .ag-rtl .ag-group-checkbox + .ag-group-checkbox,\n    .ag-theme-balham-dark .ag-rtl .ag-group-expanded + .ag-group-checkbox,\n    .ag-theme-balham-dark .ag-rtl .ag-group-contracted + .ag-group-checkbox {\n      margin-right: 12px;\n      margin-left: initial; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-drop-horizontal {\n      padding-right: 12px; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-drop-horizontal span {\n        float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-drop-horizontal > div:first-child {\n        float: right; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-drop-horizontal .ag-icon-group,\n      .ag-theme-balham-dark .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n        margin-left: 12px;\n        margin-right: 0; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-drop-horizontal .ag-right-arrow {\n        background-color: transparent;\n        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjUgNy41bC00IDRMOCAxMGwxLjUtMS41aC03di0yaDdMOCA1bDEuNS0xLjV6IiBzdHJva2U9IiNFQ0YwRjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 16px 16px;\n        height: 16px;\n        opacity: 0.87;\n        width: 16px;\n        height: 100%; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-drop-horizontal .ag-left-arrow {\n        background-color: transparent;\n        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSA4LjVsNC00TDggNiA2LjUgNy41aDd2MmgtN0w4IDExbC0xLjUgMS41eiIgc3Ryb2tlPSIjRUNGMEYxIiBmaWxsPSJub25lIi8+PC9zdmc+);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: 16px 16px;\n        height: 16px;\n        opacity: 0.87;\n        width: 16px;\n        height: 100%; }\n  .ag-theme-balham-dark .ag-rtl .ag-floating-filter-body {\n      float: right;\n      margin-left: 0; }\n  .ag-theme-balham-dark .ag-rtl .ag-floating-filter-button {\n      float: left; }\n  .ag-theme-balham-dark .ag-rtl .ag-header .ag-header-cell-resize::after {\n      border-left: 1px solid #424242;\n      border-right: 0; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-drag {\n      background-position-x: right; }\n  .ag-theme-balham-dark .ag-status-bar {\n    background: #2d3436;\n    border: 1px solid #424242;\n    border-top: 0;\n    color: rgba(245, 245, 245, 0.38);\n    font-weight: 600;\n    font-size: 12px;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n    padding-right: 16px;\n    padding-left: 16px; }\n  .ag-theme-balham-dark .ag-name-value-value {\n    color: #F5F5F5; }\n  .ag-theme-balham-dark .ag-status-bar-center {\n    text-align: center; }\n  .ag-theme-balham-dark .ag-name-value {\n    margin-left: 4px;\n    margin-right: 4px;\n    padding-top: 8px;\n    padding-bottom: 8px; }\n  .ag-theme-balham-dark .ag-details-row {\n    padding: 20px; }\n  .ag-theme-balham-dark .ag-overlay-loading-wrapper {\n    background-color: rgba(255, 255, 255, 0.5); }\n  .ag-theme-balham-dark .ag-overlay-loading-center {\n    background: #2d3436;\n    border-radius: 2px;\n    box-shadow: none;\n    padding: 4px; }\n  .ag-theme-balham-dark .ag-side-bar {\n    background-color: #1c1f20;\n    border-right: 1px solid #424242;\n    border-top: 1px solid #424242;\n    position: relative; }\n  .ag-theme-balham-dark .ag-side-bar .ag-side-buttons {\n      padding-top: 16px;\n      background: #2d3436;\n      border-bottom: 1px solid #424242;\n      position: relative; }\n  .ag-theme-balham-dark .ag-side-bar .ag-side-buttons .ag-side-button button {\n        background: transparent;\n        border: 0;\n        color: #F5F5F5;\n        padding: 8px 0 8px 0;\n        width: 100%;\n        margin: 0;\n        min-height: 72px;\n        border-width: 1px 0 1px 0;\n        border-style: solid;\n        border-color: transparent;\n        background-position-y: 4px;\n        background-position-x: center;\n        background-repeat: no-repeat; }\n  .ag-theme-balham-dark .ag-side-bar .ag-side-buttons .ag-selected button {\n        background-color: #1c1f20;\n        margin-left: -1px;\n        padding-left: 1px;\n        width: calc(100% + 1px);\n        border-color: #424242; }\n  .ag-theme-balham-dark .ag-side-bar .ag-panel-container {\n      border-right: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-side-bar.full-width .ag-panel-container {\n      border-right: 0; }\n  .ag-theme-balham-dark .ag-side-bar .ag-column-drop {\n      min-height: 50px; }\n  .ag-theme-balham-dark .ag-rtl .ag-side-bar .ag-panel-container {\n    border-left: 1px solid #424242;\n    border-right: 0; }\n  .ag-theme-balham-dark .ag-rtl .ag-side-bar.full-width .ag-panel-container {\n    border-left: 0; }\n  .ag-theme-balham-dark .ag-primary-cols-filter {\n    width: 100%; }\n  .ag-theme-balham-dark .ag-primary-cols-filter:disabled {\n      color: rgba(245, 245, 245, 0.38);\n      background-color: rgba(48, 46, 46, 0.3); }\n  .ag-theme-balham-dark .ag-primary-cols-filter-wrapper {\n    margin-left: 4px;\n    margin-right: 4px; }\n  .ag-theme-balham-dark .sass-variables::after {\n    content: '{ \"autoSizePadding\": \"12px\", \"headerHeight\": \"32px\", \"groupPaddingSize\": \"28px\", \"footerPaddingAddition\": \"16px\", \"virtualItemHeight\": \"28px\", \"aggFuncPopupHeight\": \"98px\", \"checkboxIndentWidth\": \"20px\", \"leafNodePadding\": \"12px\", \"rowHeight\": \"28px\", \"gridSize\": \"4px\", \"iconSize\": \"16px\" }';\n    display: none; }\n  .ag-theme-balham-dark .ag-cell-highlight {\n    background-color: #00B0FF !important; }\n  .ag-theme-balham-dark .ag-header-cell-resize::after {\n    height: 80%;\n    margin-top: 8px; }\n  .ag-theme-balham-dark .ag-header-cell::after,\n  .ag-theme-balham-dark .ag-header-group-cell::after {\n    border-right: 1px solid rgba(66, 66, 66, 0.5);\n    content: \" \";\n    height: 16px;\n    margin-top: 8px;\n    position: absolute;\n    text-indent: -2000px;\n    top: 0; }\n  .ag-theme-balham-dark .ag-ltr .ag-header-cell::after,\n  .ag-theme-balham-dark .ag-ltr .ag-header-group-cell::after {\n    right: 0; }\n  .ag-theme-balham-dark .ag-rtl .ag-header-cell::after,\n  .ag-theme-balham-dark .ag-rtl .ag-header-group-cell::after {\n    left: 0; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal.ag-column-drop {\n    border: 1px solid #424242;\n    border-bottom: 0; }\n  .ag-theme-balham-dark .ag-ltr .ag-column-drop-horizontal.ag-column-drop.ag-width-half:first-child {\n    border-right: 0; }\n  .ag-theme-balham-dark .ag-rtl .ag-column-drop-horizontal.ag-column-drop.ag-width-half:first-child {\n    border-left: 0; }\n  .ag-theme-balham-dark .ag-row {\n    border-color: #5c5c5c; }\n  .ag-theme-balham-dark .ag-row-selected {\n    border-color: #005880; }\n  .ag-theme-balham-dark .ag-icon-row-drag {\n    background-position-y: center; }\n  .ag-theme-balham-dark .ag-column-drag {\n    background-position-y: center; }\n  .ag-theme-balham-dark .ag-column-drop-cell {\n    height: 24px !important; }\n  .ag-theme-balham-dark .ag-column-drop-cell .ag-column-drop-cell-button {\n      height: calc(100% - 4px);\n      margin-bottom: 2px;\n      margin-top: 2px; }\n  .ag-theme-balham-dark .ag-column-drop-cell .ag-column-drop-cell-button:hover {\n      opacity: 1; }\n  .ag-theme-balham-dark .ag-column-drop-vertical .ag-column-drop-cell {\n    margin-left: 8px;\n    margin-right: 8px; }\n  .ag-theme-balham-dark .ag-column-drop-vertical .ag-column-drop-cell .ag-column-drop-cell-text {\n      line-height: 24px;\n      margin-left: 8px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal {\n    background-color: #1c1f20;\n    height: 32px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal .ag-column-drop-empty-message {\n      line-height: 32px; }\n  .ag-theme-balham-dark .ag-column-drop-horizontal .ag-column-drop-cell-text {\n      line-height: 24px;\n      margin-left: 8px; }\n  .ag-theme-balham-dark .ag-filter .ag-filter-header-container {\n    height: 24px; }\n  .ag-theme-balham-dark .ag-root {\n    border: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-filter .ag-filter-value {\n    line-height: 20px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper {\n    border-right: 1px solid #424242;\n    border-bottom: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-select-panel {\n      padding-bottom: 8px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-select-panel .ag-column-tool-panel-column-group,\n      .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-select-panel .ag-column-tool-panel-column {\n        height: 20px;\n        line-height: 20px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop {\n      padding-bottom: 8px;\n      padding-top: 8px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop .ag-icon {\n        margin-bottom: 4px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-title {\n        display: inline-block;\n        float: none;\n        margin-bottom: 4px; }\n  .ag-theme-balham-dark .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n        height: 16px;\n        line-height: 16px;\n        padding-left: 24px; }\n  .ag-theme-balham-dark .ag-rtl .ag-side-bar,\n  .ag-theme-balham-dark .ag-rtl .ag-tool-panel-wrapper {\n    border-left: 1px solid #424242;\n    border-right: 0; }\n  .ag-theme-balham-dark .ag-icon-expanded,\n  .ag-theme-balham-dark .ag-icon-contracted {\n    -webkit-transform: translateY(2px);\n            transform: translateY(2px); }\n  .ag-theme-balham-dark .ag-rtl .ag-icon-expanded {\n    -webkit-transform: translateY(2px) rotate(180deg);\n            transform: translateY(2px) rotate(180deg); }\n  .ag-theme-balham-dark .ag-menu-option {\n    height: 28px;\n    line-height: 28px; }\n  .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column-group,\n  .ag-theme-balham-dark .ag-column-select-panel .ag-column-tool-panel-column {\n    height: 20px;\n    line-height: 20px; }\n  .ag-theme-balham-dark .ag-filter-filter {\n    margin-left: 4px;\n    margin-right: 4px;\n    width: calc(100% - 8px); }\n  .ag-theme-balham-dark .ag-tab-header {\n    border-bottom: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-tab-header .ag-tab {\n      margin-bottom: -2px; }\n  .ag-theme-balham-dark .ag-tab-header .ag-tab.ag-tab-selected {\n      background-color: #2d3436;\n      border-bottom-color: transparent; }\n  .ag-theme-balham-dark .ag-tab-body,\n  .ag-theme-balham-dark .ag-popup-editor,\n  .ag-theme-balham-dark .ag-menu {\n    background-color: #2d3436;\n    color: #F5F5F5; }\n  .ag-theme-balham-dark .ag-cell-inline-editing {\n    height: 28px;\n    padding: 0; }\n  .ag-theme-balham-dark .ag-details-row {\n    background-color: #2d3436; }\n  .ag-theme-balham-dark .ag-overlay-loading-wrapper {\n    background-color: rgba(255, 255, 255, 0.5); }\n  .ag-theme-balham-dark .ag-overlay-loading-center {\n    background-color: #2d3436;\n    border: 1px solid #424242;\n    color: #F5F5F5;\n    padding: 16px; }\n  .ag-theme-balham-dark .ag-cell-range-selected-1:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.3); }\n  .ag-theme-balham-dark .ag-cell-range-selected-2:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.4); }\n  .ag-theme-balham-dark .ag-cell-range-selected-3:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.5); }\n  .ag-theme-balham-dark .ag-cell-range-selected-4:not(.ag-cell-focus) {\n    background-color: rgba(0, 176, 255, 0.6); }\n  .ag-theme-balham-dark .ag-rich-select-value {\n    border-bottom: 1px solid #424242; }\n  .ag-theme-balham-dark .ag-filter-apply-panel {\n    border-top: 1px solid #424242; }\n  .ag-theme-balham-dark input,\n  .ag-theme-balham-dark select {\n    background-color: #262c2e;\n    color: #F5F5F5; }\n  .ag-theme-balham-dark .ag-floating-filter-body input {\n    border-width: 1px;\n    border-style: solid; }\n  .ag-theme-balham-dark .ag-filter-toolpanel-body {\n    background-color: #2d3436; }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9hZy1ncmlkLWNvbW11bml0eS9kaXN0L3N0eWxlcy9hZy10aGVtZS1iYWxoYW0tZGFyay5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdJQUFnSTtFQUNoSSxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFFO0VBQ2pCO0lBQ0UseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFFO0VBQ3BCO0lBQ0UseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMscUJBQXFCLEVBQUU7RUFDekI7SUFDRSxhQUFhLEVBQUU7RUFDakI7SUFDRSxrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usa0JBQWtCLEVBQUU7RUFDdEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLGtCQUFrQixFQUFFO0VBQ3RCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usa0JBQWtCLEVBQUU7RUFDdEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLGtCQUFrQixFQUFFO0VBQ3RCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UscUJBQXFCLEVBQUU7RUFDekI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxxQkFBcUIsRUFBRTtFQUN6QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLHFCQUFxQixFQUFFO0VBQ3pCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UscUJBQXFCLEVBQUU7RUFDekI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxxQkFBcUIsRUFBRTtFQUN6QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLHFCQUFxQixFQUFFO0VBQ3pCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0UscUJBQXFCLEVBQUU7RUFDekI7SUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxxQkFBcUIsRUFBRTtFQUN6QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3ZCO0lBQ0Usb0JBQW9CLEVBQUU7RUFDeEI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLHFCQUFxQixFQUFFO0VBQ3pCO0lBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7SUFDRSxvQkFBb0IsRUFBRTtFQUN4QjtJQUNFLG9CQUFvQixFQUFFO0VBQ3hC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SUFDZCxhQUFhLEVBQUU7RUFDakI7SUFDRSx3Q0FBd0MsRUFBRTtFQUM1QztJQUNFLHdDQUF3QyxFQUFFO0VBQzVDO0lBQ0Usd0NBQXdDLEVBQUU7RUFDNUM7SUFDRSx3Q0FBd0MsRUFBRTtFQUM1QztJQUNFLGdDQUFnQyxFQUFFO0VBQ3BDO0lBQ0UsNkJBQTZCLEVBQUU7RUFDakM7O0lBRUUseUJBQXlCO0lBQ3pCLGNBQWMsRUFBRTtFQUNsQjtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLHlCQUF5QixFQUFFIiwiZmlsZSI6InNyYy9hcHAvYnVnL2J1Z3MvYnVncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFnLXRoZW1lLWJhbGhhbS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzQzNjtcbiAgY29sb3I6ICNGNUY1RjU7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbWVudSwgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10aGVtZS1iYWxoYW0tZGFyay5hZy1kbmQtZ2hvc3QsIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY2VsbC1pbmxpbmUtZWRpdGluZywgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wb3B1cC1lZGl0b3IsIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctc2VsZWN0LWFnZy1mdW5jLXBvcHVwLCAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLW92ZXJsYXktbG9hZGluZy1jZW50ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQyNDI7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10YWItaGVhZGVyIC5hZy10YWIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogNHB4IDhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRhYi1oZWFkZXIgLmFnLXRhYi5hZy10YWItc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDM0MzY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMEIwRkY7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyZDM0MzY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDI0MjQyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAqOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTEge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTEge1xuICAgIHBhZGRpbmctbGVmdDogMjhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTIge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTIge1xuICAgIHBhZGRpbmctbGVmdDogNTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1NnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTMge1xuICAgIHBhZGRpbmctbGVmdDogNjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTMge1xuICAgIHBhZGRpbmctbGVmdDogODRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4NHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTQge1xuICAgIHBhZGRpbmctbGVmdDogODBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTQge1xuICAgIHBhZGRpbmctbGVmdDogMTEycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtNCB7XG4gICAgcGFkZGluZy1yaWdodDogMTEycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTYge1xuICAgIHBhZGRpbmctbGVmdDogMTIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtNiB7XG4gICAgcGFkZGluZy1yaWdodDogMTIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNjhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC02IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNjhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC03IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTcge1xuICAgIHBhZGRpbmctbGVmdDogMTk2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtNyB7XG4gICAgcGFkZGluZy1yaWdodDogMTk2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC04IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC04IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIyNHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIyNHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTkge1xuICAgIHBhZGRpbmctbGVmdDogMTgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtOSB7XG4gICAgcGFkZGluZy1yaWdodDogMTgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtOSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNTJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC05IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNTJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0xMCB7XG4gICAgcGFkZGluZy1yaWdodDogMjAwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMTAge1xuICAgIHBhZGRpbmctbGVmdDogMjgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDI4MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTExIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIyMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTExIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0xMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMDhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0xMSB7XG4gICAgcGFkZGluZy1yaWdodDogMzA4cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMTIge1xuICAgIHBhZGRpbmctbGVmdDogMjQwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDI0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTEyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMzNnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTEyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMzZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0xMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0xMyB7XG4gICAgcGFkZGluZy1yaWdodDogMjYwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMTMge1xuICAgIHBhZGRpbmctbGVmdDogMzY0cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDM2NHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTE0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI4MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTE0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyODBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0xNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzOTJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0xNCB7XG4gICAgcGFkZGluZy1yaWdodDogMzkycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMTUge1xuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTE1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQyMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTE1IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0xNiB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0xNiB7XG4gICAgcGFkZGluZy1yaWdodDogMzIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMTYge1xuICAgIHBhZGRpbmctbGVmdDogNDQ4cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMTYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ0OHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTE3IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTE3IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0xNyB7XG4gICAgcGFkZGluZy1sZWZ0OiA0NzZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0xNyB7XG4gICAgcGFkZGluZy1yaWdodDogNDc2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMTgge1xuICAgIHBhZGRpbmctbGVmdDogMzYwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMTgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDM2MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTE4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwNHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTE4IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0xOSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzODBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0xOSB7XG4gICAgcGFkZGluZy1yaWdodDogMzgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMTkge1xuICAgIHBhZGRpbmctbGVmdDogNTMycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMTkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUzMnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTIwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTIwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0yMCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1NjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0yMCB7XG4gICAgcGFkZGluZy1yaWdodDogNTYwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMjEge1xuICAgIHBhZGRpbmctbGVmdDogNDIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMjEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQyMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTIxIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDU4OHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTIxIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1ODhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0yMiB7XG4gICAgcGFkZGluZy1sZWZ0OiA0NDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0yMiB7XG4gICAgcGFkZGluZy1yaWdodDogNDQwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMjIge1xuICAgIHBhZGRpbmctbGVmdDogNjE2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMjIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDYxNnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTIzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQ2MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTIzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0yMyB7XG4gICAgcGFkZGluZy1sZWZ0OiA2NDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0yMyB7XG4gICAgcGFkZGluZy1yaWdodDogNjQ0cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMjQge1xuICAgIHBhZGRpbmctbGVmdDogNDgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMjQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ4MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTI0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDY3MnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTI0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NzJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0yNSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1MDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0yNSB7XG4gICAgcGFkZGluZy1yaWdodDogNTAwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMjUge1xuICAgIHBhZGRpbmctbGVmdDogNzAwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMjUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDcwMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTI2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUyMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTI2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0yNiB7XG4gICAgcGFkZGluZy1sZWZ0OiA3MjhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0yNiB7XG4gICAgcGFkZGluZy1yaWdodDogNzI4cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMjcge1xuICAgIHBhZGRpbmctbGVmdDogNTQwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMjcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDU0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTI3IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDc1NnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTI3IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3NTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0yOCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1NjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0yOCB7XG4gICAgcGFkZGluZy1yaWdodDogNTYwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMjgge1xuICAgIHBhZGRpbmctbGVmdDogNzg0cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMjgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDc4NHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTI5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDU4MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTI5IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1ODBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0yOSB7XG4gICAgcGFkZGluZy1sZWZ0OiA4MTJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0yOSB7XG4gICAgcGFkZGluZy1yaWdodDogODEycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMzAge1xuICAgIHBhZGRpbmctbGVmdDogNjAwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMzAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDYwMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTMwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDg0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTMwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4NDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0zMSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2MjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0zMSB7XG4gICAgcGFkZGluZy1yaWdodDogNjIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMzEge1xuICAgIHBhZGRpbmctbGVmdDogODY4cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMzEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDg2OHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTMyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDY0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTMyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0zMiB7XG4gICAgcGFkZGluZy1sZWZ0OiA4OTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0zMiB7XG4gICAgcGFkZGluZy1yaWdodDogODk2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMzMge1xuICAgIHBhZGRpbmctbGVmdDogNjYwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMzMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDY2MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTMzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDkyNHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTMzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MjRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0zNCB7XG4gICAgcGFkZGluZy1sZWZ0OiA2ODBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0zNCB7XG4gICAgcGFkZGluZy1yaWdodDogNjgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMzQge1xuICAgIHBhZGRpbmctbGVmdDogOTUycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMzQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDk1MnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTM1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDcwMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTM1IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0zNSB7XG4gICAgcGFkZGluZy1sZWZ0OiA5ODBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0zNSB7XG4gICAgcGFkZGluZy1yaWdodDogOTgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMzYge1xuICAgIHBhZGRpbmctbGVmdDogNzIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMzYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDcyMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTM2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMDhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0zNiB7XG4gICAgcGFkZGluZy1yaWdodDogMTAwOHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTM3IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDc0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTM3IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3NDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC0zNyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDM2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtMzcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMzZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC0zOCB7XG4gICAgcGFkZGluZy1sZWZ0OiA3NjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC0zOCB7XG4gICAgcGFkZGluZy1yaWdodDogNzYwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtMzgge1xuICAgIHBhZGRpbmctbGVmdDogMTA2NHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTM4IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDY0cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMzkge1xuICAgIHBhZGRpbmctbGVmdDogNzgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtMzkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDc4MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTM5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwOTJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC0zOSB7XG4gICAgcGFkZGluZy1yaWdodDogMTA5MnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTQwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTQwIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4MDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC00MCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMTIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtNDAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDExMjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC00MSB7XG4gICAgcGFkZGluZy1sZWZ0OiA4MjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC00MSB7XG4gICAgcGFkZGluZy1yaWdodDogODIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtNDEge1xuICAgIHBhZGRpbmctbGVmdDogMTE0OHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTQxIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMTQ4cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtNDIge1xuICAgIHBhZGRpbmctbGVmdDogODQwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtNDIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDg0MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTQyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDExNzZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC00MiB7XG4gICAgcGFkZGluZy1yaWdodDogMTE3NnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTQzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDg2MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTQzIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4NjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC00MyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMjA0cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtNDMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEyMDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC00NCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4ODBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC00NCB7XG4gICAgcGFkZGluZy1yaWdodDogODgwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtNDQge1xuICAgIHBhZGRpbmctbGVmdDogMTIzMnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTQ0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjMycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtNDUge1xuICAgIHBhZGRpbmctbGVmdDogOTAwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtNDUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDkwMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTQ1IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyNjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC00NSB7XG4gICAgcGFkZGluZy1yaWdodDogMTI2MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTQ2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDkyMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTQ2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC00NiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMjg4cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtNDYge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEyODhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctdG9vbHBhbmVsLWluZGVudC00NyB7XG4gICAgcGFkZGluZy1sZWZ0OiA5NDBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbHBhbmVsLWluZGVudC00NyB7XG4gICAgcGFkZGluZy1yaWdodDogOTQwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXJvdy1ncm91cC1pbmRlbnQtNDcge1xuICAgIHBhZGRpbmctbGVmdDogMTMxNnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTQ3IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMzE2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLXRvb2xwYW5lbC1pbmRlbnQtNDgge1xuICAgIHBhZGRpbmctbGVmdDogOTYwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2xwYW5lbC1pbmRlbnQtNDgge1xuICAgIHBhZGRpbmctcmlnaHQ6IDk2MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3ctZ3JvdXAtaW5kZW50LTQ4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzNDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWdyb3VwLWluZGVudC00OCB7XG4gICAgcGFkZGluZy1yaWdodDogMTM0NHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy10b29scGFuZWwtaW5kZW50LTQ5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDk4MHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29scGFuZWwtaW5kZW50LTQ5IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA5ODBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWluZGVudC00OSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMzcycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1pbmRlbnQtNDkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEzNzJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LWdyb3VwLWxlYWYtaW5kZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMjhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctY2VsbCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1yb3cuYWctY2VsbC1maXJzdC1yaWdodC1waW5uZWQsIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1jZWxsOm5vdCguYWctY2VsbC1mb2N1cykuYWctY2VsbC1maXJzdC1yaWdodC1waW5uZWQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzQyNDI0MjsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctcm93LmFnLWNlbGwtbGFzdC1sZWZ0LXBpbm5lZCwgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1sdHIgLmFnLWNlbGw6bm90KC5hZy1jZWxsLWZvY3VzKS5hZy1jZWxsLWxhc3QtbGVmdC1waW5uZWQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MjQyNDI7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1ncm91cC1sZWFmLWluZGVudCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1jZWxsIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LmFnLWNlbGwtZmlyc3QtcmlnaHQtcGlubmVkLCAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctY2VsbDpub3QoLmFnLWNlbGwtZm9jdXMpLmFnLWNlbGwtZmlyc3QtcmlnaHQtcGlubmVkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0MjQyNDI7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy5hZy1jZWxsLWxhc3QtbGVmdC1waW5uZWQsIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1jZWxsOm5vdCguYWctY2VsbC1mb2N1cykuYWctY2VsbC1sYXN0LWxlZnQtcGlubmVkIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDI0MjQyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdmFsdWUtY2hhbmdlLWRlbHRhIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy12YWx1ZS1jaGFuZ2UtZGVsdGEtdXAge1xuICAgIGNvbG9yOiAjNDNhMDQ3OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdmFsdWUtY2hhbmdlLWRlbHRhLWRvd24ge1xuICAgIGNvbG9yOiAjZTUzOTM1OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdmFsdWUtY2hhbmdlLXZhbHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy12YWx1ZS1jaGFuZ2UtdmFsdWUtaGlnaGxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAxNjAsIDEzMywgMC41KTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFmMjA7XG4gICAgY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC42NCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MjQyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcGlubmVkLXJpZ2h0LWhlYWRlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDI0MjQyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcGlubmVkLWxlZnQtaGVhZGVyIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDI0MjQyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaGVhZGVyLXJvdyB7XG4gICAgYm9yZGVyOiBub25lOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcm93IHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzQyNDI0MjtcbiAgICBib3JkZXItd2lkdGg6IDA7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJvdzpub3QoLmFnLXJvdy1maXJzdCkge1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMCAwOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1yb3cuYWctcm93LWxhc3Qge1xuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcm93LW9kZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmMyZTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJvdy1ldmVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaG9yaXpvbnRhbC1sZWZ0LXNwYWNlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzQyNDI0MjsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaG9yaXpvbnRhbC1sZWZ0LXNwYWNlci5hZy1zY3JvbGxlci1jb3JuZXIge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaG9yaXpvbnRhbC1yaWdodC1zcGFjZXIge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzQyNDI0MjsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaG9yaXpvbnRhbC1yaWdodC1zcGFjZXIuYWctc2Nyb2xsZXItY29ybmVyIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcm93LWhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q0NzQ5OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbnVtZXJpYy1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1jZWxsLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaGVhZGVyLWNlbGwtbGFiZWwgPiBzcGFuIHtcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1oZWFkZXItY2VsbC1sYWJlbCAuYWctaGVhZGVyLWljb24ge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxNHB4IDE0cHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgb3BhY2l0eTogMC44NzsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaGVhZGVyLWNlbGwtbGFiZWwgLmFnLWhlYWRlci1jZWxsLXRleHQge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLW51bWVyaWMtaGVhZGVyIC5hZy1oZWFkZXItY2VsbC1sYWJlbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGZsb2F0OiByaWdodDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbnVtZXJpYy1oZWFkZXIgLmFnLWhlYWRlci1jZWxsLWxhYmVsID4gc3BhbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1udW1lcmljLWhlYWRlciAuYWctaGVhZGVyLWNlbGwtbWVudS1idXR0b24ge1xuICAgIGZsb2F0OiBsZWZ0OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaGVhZGVyLWdyb3VwLXRleHQge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1jZWxsLFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1ncm91cC1jZWxsIHtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzQyNDI0MjtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBib3JkZXItd2lkdGg6IDA7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1jZWxsLmFnLWhlYWRlci1jZWxsLW1vdmluZyxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1ncm91cC1jZWxsLmFnLWhlYWRlci1jZWxsLW1vdmluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1oZWFkZXItY2VsbDpub3QoLmFnLWhlYWRlci1ncm91cC1jZWxsLW5vLWdyb3VwKSxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1ncm91cC1jZWxsOm5vdCguYWctaGVhZGVyLWdyb3VwLWNlbGwtbm8tZ3JvdXApIHtcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IDFweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1yb3c6Zmlyc3QtY2hpbGQgLmFnLWhlYWRlci1jZWxsLCAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1yb3c6Zmlyc3QtY2hpbGQgLmFnLWhlYWRlci1ncm91cC1jZWxsIHtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY2VsbCB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDExcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1yb3ctZHJhZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGN1cnNvcjogZ3JhYjsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcm93LWRyYWcgLmFnLWljb24tcm93LWRyYWcge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRNdU5TQXlMalYyTVcwd0lESjJNVzB3SURKMk1XMHpMVGQyTVcwd0lESjJNVzB3SURKMk1XMHpMVGQyTVcwd0lESjJNVzB3SURKMk1XMHpMVGQyTVcwd0lESjJNVzB3SURKMk1TSWdjM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaUJ6ZEhKdmEyVXRiR2x1WldOaGNEMGljM0YxWVhKbElpOCtQQzl6ZG1jKyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjg3O1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJvdy1kcmFnZ2luZywgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1yb3ctZHJhZ2dpbmcgLmFnLXJvdy1kcmFnIHtcbiAgICBjdXJzb3I6IG1vdmU7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXJvdy1kcmFnIHtcbiAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctcm93LWRyYWcgLmFnLWljb24tcm93LWRyYWcge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcmFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVE11TlNBeUxqVjJNVzB3SURKMk1XMHdJREoyTVcwekxUZDJNVzB3SURKMk1XMHdJREoyTVcwekxUZDJNVzB3SURKMk1XMHdJREoyTVcwekxUZDJNVzB3SURKMk1XMHdJREoyTVNJZ2MzUnliMnRsUFNJalJVTkdNRVl4SWlCbWFXeHNQU0p1YjI1bElpQnpkSEp2YTJVdGJHbHVaV05oY0QwaWMzRjFZWEpsSWk4K1BDOXpkbWMrKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAyMHB4O1xuICAgIGN1cnNvcjogZ3JhYjsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJvdy1kcmFnZ2luZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHotaW5kZXg6IDEwMDAwOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1oYXMtZm9jdXMgLmFnLWNlbGwtZm9jdXMsIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1oYXMtZm9jdXMgLmFnLWNlbGwtZm9jdXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEIwRkY7XG4gICAgb3V0bGluZTogaW5pdGlhbDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1jZWxsLXJlc2l6ZSB7XG4gICAgd2lkdGg6IDhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tYWdncmVnYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2djM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGp4d1lYUm9JR1E5SWsweE1DNDFJRFpXTkM0MWFDMDFkaTQxTXpKaE1TQXhJREFnTUNBd0lDNHpOaTQzTmpoc01TNDNNVGdnTVM0ME16SmhNU0F4SURBZ01DQXhJREFnTVM0MU16Wk1OUzQ0TmlBeE1DNHlZVEVnTVNBd0lEQWdNQzB1TXpZdU56WTRkaTQxTXpKb05WWXhNQ0l2UGp4eVpXTjBJSGc5SWpFdU5TSWdlVDBpTVM0MUlpQjNhV1IwYUQwaU1UTWlJR2hsYVdkb2REMGlNVE1pSUhKNFBTSXlJaTgrUEM5blBqd3ZjM1puUGc9PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1hcnJvd3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUY3VOU0F4TkZZelRUSWdPQzQxYURFeGJTMDNMalVnTkd3eUlESWdNaTB5YlRBdE9Hd3RNaTB5TFRJZ01tMHRNaUF5YkMweUlESWdNaUF5YlRnZ01Hd3lMVEl0TWkweUlpQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlHWnBiR3c5SW01dmJtVWlMejQ4TDNOMlp6ND0pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tYXNjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVGN1TlNBeE1sWTBiVE1nTWk0MWJDMHpMVE10TXlBeklpQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlHWnBiR3c5SW01dmJtVWlMejQ4TDNOMlp6ND0pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tY2hlY2tib3gtY2hlY2tlZC1yZWFkb25seSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQanhrWldaelBqeHlaV04wSUdsa1BTSmhJaUI0UFNJeElpQjVQU0l4SWlCM2FXUjBhRDBpTVRRaUlHaGxhV2RvZEQwaU1UUWlJSEo0UFNJeUlpOCtQQzlrWldaelBqeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ2IzQmhZMmwwZVQwaUxqVWlQangxYzJVZ1ptbHNiRDBpSXpKRU16UXpOaUlnZUd4cGJtczZhSEpsWmowaUkyRWlMejQ4Y21WamRDQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlIZzlJakV1TlNJZ2VUMGlNUzQxSWlCM2FXUjBhRDBpTVRNaUlHaGxhV2RvZEQwaU1UTWlJSEo0UFNJeUlpOCtQSEJoZEdnZ2MzUnliMnRsUFNJalJVTkdNRVl4SWlCa1BTSk5NVElnTld3dE5TNDFJRFV1TlV3MElEZ2lMejQ4TDJjK1BDOXpkbWMrKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLWNoZWNrYm94LWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh5WldOMElHbGtQU0poSWlCNFBTSXhJaUI1UFNJeElpQjNhV1IwYUQwaU1UUWlJR2hsYVdkb2REMGlNVFFpSUhKNFBTSXlJaTgrUEM5a1pXWnpQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStQSFZ6WlNCbWFXeHNQU0lqTWtRek5ETTJJaUI0YkdsdWF6cG9jbVZtUFNJallTSXZQanh5WldOMElITjBjbTlyWlQwaUkwVkRSakJHTVNJZ2VEMGlNUzQxSWlCNVBTSXhMalVpSUhkcFpIUm9QU0l4TXlJZ2FHVnBaMmgwUFNJeE15SWdjbmc5SWpJaUx6NDhjR0YwYUNCemRISnZhMlU5SWlORlEwWXdSakVpSUdROUlrMHhNaUExYkMwMUxqVWdOUzQxVERRZ09DSXZQand2Wno0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUtcmVhZG9ubHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh5WldOMElHbGtQU0poSWlCNFBTSXhJaUI1UFNJeElpQjNhV1IwYUQwaU1UUWlJR2hsYVdkb2REMGlNVFFpSUhKNFBTSXlJaTgrUEM5a1pXWnpQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdiM0JoWTJsMGVUMGlMalVpUGp4MWMyVWdabWxzYkQwaUl6SkVNelF6TmlJZ2VHeHBibXM2YUhKbFpqMGlJMkVpTHo0OGNtVmpkQ0J6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJSGc5SWpFdU5TSWdlVDBpTVM0MUlpQjNhV1IwYUQwaU1UTWlJR2hsYVdkb2REMGlNVE1pSUhKNFBTSXlJaTgrUEhCaGRHZ2daRDBpVFRRZ09DNDFhRGdpSUhOMGNtOXJaVDBpSTBWRFJqQkdNU0l2UGp3dlp6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaVBqeGtaV1p6UGp4eVpXTjBJR2xrUFNKaElpQjRQU0l4SWlCNVBTSXhJaUIzYVdSMGFEMGlNVFFpSUdobGFXZG9kRDBpTVRRaUlISjRQU0l5SWk4K1BDOWtaV1p6UGp4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krUEhWelpTQm1hV3hzUFNJak1rUXpORE0ySWlCNGJHbHVhenBvY21WbVBTSWpZU0l2UGp4eVpXTjBJSE4wY205clpUMGlJMFZEUmpCR01TSWdlRDBpTVM0MUlpQjVQU0l4TGpVaUlIZHBaSFJvUFNJeE15SWdhR1ZwWjJoMFBTSXhNeUlnY25nOUlqSWlMejQ4Y0dGMGFDQmtQU0pOTkNBNExqVm9PQ0lnYzNSeWIydGxQU0lqUlVOR01FWXhJaTgrUEM5blBqd3ZjM1puUGc9PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1jaGVja2JveC11bmNoZWNrZWQtcmVhZG9ubHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh5WldOMElHbGtQU0poSWlCNFBTSXhJaUI1UFNJeElpQjNhV1IwYUQwaU1UUWlJR2hsYVdkb2REMGlNVFFpSUhKNFBTSXlJaTgrUEM5a1pXWnpQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdiM0JoWTJsMGVUMGlMalVpUGp4MWMyVWdabWxzYkQwaUl6SkVNelF6TmlJZ2VHeHBibXM2YUhKbFpqMGlJMkVpTHo0OGNtVmpkQ0J6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJSGc5SWpFdU5TSWdlVDBpTVM0MUlpQjNhV1IwYUQwaU1UTWlJR2hsYVdkb2REMGlNVE1pSUhKNFBTSXlJaTgrUEM5blBqd3ZjM1puUGc9PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1jaGVja2JveC11bmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpUGp4a1pXWnpQanh5WldOMElHbGtQU0poSWlCNFBTSXhJaUI1UFNJeElpQjNhV1IwYUQwaU1UUWlJR2hsYVdkb2REMGlNVFFpSUhKNFBTSXlJaTgrUEM5a1pXWnpQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStQSFZ6WlNCbWFXeHNQU0lqTWtRek5ETTJJaUI0YkdsdWF6cG9jbVZtUFNJallTSXZQanh5WldOMElITjBjbTlyWlQwaUkwVkRSakJHTVNJZ2VEMGlNUzQxSWlCNVBTSXhMalVpSUhkcFpIUm9QU0l4TXlJZ2FHVnBaMmgwUFNJeE15SWdjbmc5SWpJaUx6NDhMMmMrUEM5emRtYyspO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tY29sdW1uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVE11TlNBekxqVjJPR2d6ZGkwNGVpSWdjM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaUJ6ZEhKdmEyVXRiR2x1WldOaGNEMGljM0YxWVhKbElpOCtQQzl6ZG1jKyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1jb2x1bW5zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVFl1TlNBekxqVjJPRzB6TFRoMk9HMHpMVGgyT0cwdE9TMDRkamdpSUhOMGNtOXJaVDBpSTBWRFJqQkdNU0lnWm1sc2JEMGlibTl1WlNJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5OeGRXRnlaU0l2UGp3dmMzWm5QZz09KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLWNvbnRyYWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUa2dORXcxSURoc05DQTBJaUJ6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLWNvcHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2djM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGp4eVpXTjBJSGc5SWpRdU5TSWdlVDBpTkM0MUlpQjNhV1IwYUQwaU9DSWdhR1ZwWjJoMFBTSTVJaUJ5ZUQwaU1pSXZQanh3WVhSb0lHUTlJazB4TVNBeUxqVklOQzQxWVRJZ01pQXdJREFnTUMweUlESldNVE1pTHo0OEwyYytQQzl6ZG1jKyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1jdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUWXVNelE0SURRdU9UUTRZeTR4TmpFdExqTTFMakkxTWkwdU56TTFMakkxTWkweExqRTBPR0V5TGpnZ01pNDRJREFnTVNBd0xUVXVOaUF3SURJdU9DQXlMamdnTUNBd0lEQWdNaTQ0SURJdU9HTXVOREV6SURBZ0xqYzVPQzB1TURreElERXVNVFE0TFM0eU5USk1OaTQySURnZ05DNDVORGdnT1M0Mk5USkJNaTQzTWpnZ01pNDNNamdnTUNBd0lEQWdNeTQ0SURrdU5HRXlMamdnTWk0NElEQWdNU0F3SURBZ05TNDJJREl1T0NBeUxqZ2dNQ0F3SURBZ01pNDRMVEl1T0dNd0xTNDBNVE10TGpBNU1TMHVOems0TFM0eU5USXRNUzR4TkRoTU9DQTVMalJzTkM0NUlEUXVPVWd4TlhZdExqZE1OaTR6TkRnZ05DNDVORGg2VFRNdU9DQTFMakpoTVM0MElERXVOQ0F3SURFZ01TQXdMVEl1T0NBeExqUWdNUzQwSURBZ01DQXhJREFnTWk0NGVtMHdJRGd1TkdFeExqUWdNUzQwSURBZ01TQXhJREF0TWk0NElERXVOQ0F4TGpRZ01DQXdJREVnTUNBeUxqaDZUVGdnT0M0ek5VRXVNelEzTGpNME55QXdJREFnTVNBM0xqWTFJRGhqTUMwdU1UazJMakUxTkMwdU16VXVNelV0TGpNMUxqRTVOaUF3SUM0ek5TNHhOVFF1TXpVdU16VWdNQ0F1TVRrMkxTNHhOVFF1TXpVdExqTTFMak0xZW0wMExqa3ROaTQyTlV3NExqY2dOUzQ1YkRFdU5DQXhMalJNTVRVZ01pNDBkaTB1TjJndE1pNHhlaUlnWm1sc2JEMGlJMFZEUmpCR01TSXZQand2YzNablBnPT0pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tZGVzYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRjdU5TQXhNVll6YlMweklEVXVOV3d6SURNZ015MHpJaUJ6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLWV4cGFuZGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVFlnTVRKc05DMDBMVFF0TkNJZ2MzUnliMnRsUFNJalJVTkdNRVl4SWlCbWFXeHNQU0p1YjI1bElpOCtQQzl6ZG1jKyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1leWUtc2xhc2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2djM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGp4d1lYUm9JR1E5SWswNElETXVOakkxUVRZdU9EazVJRFl1T0RrNUlEQWdNQ0F3SURFdU5UZ3pJRGdnTmk0NE9Ua2dOaTQ0T1RrZ01DQXdJREFnT0NBeE1pNHpOelVnTmk0NE9Ua2dOaTQ0T1RrZ01DQXdJREFnTVRRdU5ERTNJRGdnTmk0NE9Ua2dOaTQ0T1RrZ01DQXdJREFnT0NBekxqWXlOWG9pTHo0OGNHRjBhQ0JrUFNKTk9DQXhNQzQ1TVRkaE1pNDVNVGdnTWk0NU1UZ2dNQ0F3SURFZ01DMDFMamd6TkNBeUxqa3hPQ0F5TGpreE9DQXdJREFnTVNBd0lEVXVPRE0wZWlJdlBqeHdZWFJvSUdROUlrMHpMalVnTXk0MWJEa2dPU0lnYzNSeWIydGxMV3hwYm1WallYQTlJbk54ZFdGeVpTSXZQand2Wno0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLWV5ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEdjZ2MzUnliMnRsUFNJalJVTkdNRVl4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQanh3WVhSb0lHUTlJazA0SURNdU5qSTFRVFl1T0RrNUlEWXVPRGs1SURBZ01DQXdJREV1TlRneklEZ2dOaTQ0T1RrZ05pNDRPVGtnTUNBd0lEQWdPQ0F4TWk0ek56VWdOaTQ0T1RrZ05pNDRPVGtnTUNBd0lEQWdNVFF1TkRFM0lEZ2dOaTQ0T1RrZ05pNDRPVGtnTUNBd0lEQWdPQ0F6TGpZeU5Yb2lMejQ4Y0dGMGFDQmtQU0pOT0NBeE1DNDVNVGRoTWk0NU1UZ2dNaTQ1TVRnZ01DQXdJREVnTUMwMUxqZ3pOQ0F5TGpreE9DQXlMamt4T0NBd0lEQWdNU0F3SURVdU9ETTBlaUl2UGp3dlp6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1maWx0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUTXVOU0F6TGpWb09YWXVOVGcyWVRFZ01TQXdJREFnTVMwdU1qa3pMamN3TjB3NUxqSTVNeUEzTGpjd04wRXhJREVnTUNBd0lEQWdPU0E0TGpReE5GWXhNR3d0TWlBeExqVldPQzQwTVRSaE1TQXhJREFnTUNBd0xTNHlPVE10TGpjd04wd3pMamM1TXlBMExqYzVNMkV4SURFZ01DQXdJREV0TGpJNU15MHVOekEzVmpNdU5Yb2lJSE4wY205clpUMGlJMFZEUmpCR01TSWdabWxzYkQwaWJtOXVaU0l2UGp3dmMzWm5QZz09KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQR2NnYzNSeWIydGxQU0lqUlVOR01FWXhJaUJtYVd4c1BTSnViMjVsSWlCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaVBqeHdZWFJvSUdROUlrMHpMalVnTlM0MWFERnRNU0F5YURGdE1pQXdhRFJ0TFRjZ01tZ3hiVElnTUdnMGJTMDJMVFJvTmlJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5OeGRXRnlaU0l2UGp4eVpXTjBJSGc5SWpFdU5TSWdlVDBpTVM0MUlpQjNhV1IwYUQwaU1UTWlJR2hsYVdkb2REMGlNVE1pSUhKNFBTSXlJaTgrUEM5blBqd3ZjM1puUGc9PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQR2NnYzNSeWIydGxQU0lqUlVOR01FWXhJaUJtYVd4c1BTSnViMjVsSWlCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaVBqeHdZWFJvSUdROUlrMDRJRFF1TmpJMVl5MHlMamt4TnlBd0xUVXVOREE0TGpneE5DMDJMalF4TnlBekxqTTNOU0F4TGpBeElESXVOVFlnTXk0MUlETXVNemMxSURZdU5ERTNJRE11TXpjMWN6VXVOREE0TFM0NE1UUWdOaTQwTVRjdE15NHpOelZqTFRFdU1ERXRNaTQxTmkwekxqVXRNeTR6TnpVdE5pNDBNVGN0TXk0ek56VjZJaTgrUEhCaGRHZ2daRDBpVFRnZ09TNDVNVGRETmk0ek9TQTVMamt4TnlBMUxqQTRNeUE1TGpZeElEVXVNRGd6SURoVE5pNHpPU0EyTGpBNE15QTRJRFl1TURnell6RXVOakVnTUNBeUxqa3hOeTR6TURjZ01pNDVNVGNnTVM0NU1UZFRPUzQyTVNBNUxqa3hOeUE0SURrdU9URTNlaUl2UGp3dlp6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVEl1TlNBNExqVnNOQzAwVERnZ05pQTJMalVnTnk0MWFEZDJNbWd0TjB3NElERXhiQzB4TGpVZ01TNDFlaUlnYzNSeWIydGxQU0lqUlVOR01FWXhJaUJtYVd4c1BTSnViMjVsSWk4K1BDOXpkbWMrKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLWxvYWRpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2djM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUhOMGNtOXJaUzFzYVc1bFkyRndQU0p6Y1hWaGNtVWlQanh3WVhSb0lHUTlJazAzTGpVZ01UQXVOWFl6SWlCdmNHRmphWFI1UFNJdU9DSXZQanh3WVhSb0lHUTlJazB4TUM0MUlEY3VOV2d6SWlCdmNHRmphWFI1UFNJdU5pSXZQanh3WVhSb0lHUTlJazB4TGpVZ055NDFhRE1pTHo0OGNHRjBhQ0JrUFNKTk55NDFJREV1TlhZeklpQnZjR0ZqYVhSNVBTSXVOQ0l2UGp4d1lYUm9JR1E5SWswNUxqVWdOUzQxVERFeUlETWlJRzl3WVdOcGRIazlJaTQxSWk4K1BIQmhkR2dnWkQwaVRUa3VOU0E1TGpWTU1USWdNVElpSUc5d1lXTnBkSGs5SWk0M0lpOCtQSEJoZEdnZ1pEMGlUVFV1TlNBNUxqVk1NeUF4TWlJZ2IzQmhZMmwwZVQwaUxqa2lMejQ4Y0dGMGFDQmtQU0pOTlM0MUlEVXVOVXd6SURNaUlHOXdZV05wZEhrOUlpNHpJaTgrUEM5blBqd3ZjM1puUGc9PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVE11TlNBMExqVm9PVzB0T1NBemFEbHRMVGtnTTJnNUlpQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlHWnBiR3c5SW01dmJtVWlJSE4wY205clpTMXNhVzVsWTJGd1BTSnpjWFZoY21VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1taW51cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRJdU5TQTJMalZvTVRGMk1tZ3RNVEY2SWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1ub25lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVEV4TGpVZ01USldORzB6SURJdU5Xd3RNeTB6TFRNZ00yMHROQ0EwTGpWV00yMHRNeUExTGpWc015QXpJRE10TXlJZ2MzUnliMnRsUFNJalJVTkdNRVl4SWlCbWFXeHNQU0p1YjI1bElpOCtQQzl6ZG1jKyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1ub3QtYWxsb3dlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRVdU9TQXhNUzR3TVRKQk15NDNOU0F6TGpjMUlEQWdNQ0F3SURFeExqQXhNaUExTGpsc0xUVXVNVEUwSURVdU1URXplazAwTGpRNE55QTVMall3TVV3NUxqWWdOQzQwT0RoQk15NDNOU0F6TGpjMUlEQWdNQ0F3SURRdU5EZzRJRGt1Tm5wTk55NDNOU0F4TXk0MVlUVXVOelVnTlM0M05TQXdJREVnTVNBd0xURXhMalVnTlM0M05TQTFMamMxSURBZ01DQXhJREFnTVRFdU5Yb2lJSE4wY205clpUMGlJMFZEUmpCR01TSWdabWxzYkQwaWJtOXVaU0l2UGp3dmMzWm5QZz09KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLXBhc3RlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVEV3SUROak1DMHVOUzB1TlMweExqVXRNaTB4TGpWVE5pQXlMalVnTmlBelNEUmhNaUF5SURBZ01DQXdMVElnTW5ZM1lUSWdNaUF3SURBZ01DQXlJREpvT0dFeUlESWdNQ0F3SURBZ01pMHlWalZoTWlBeUlEQWdNQ0F3TFRJdE1tZ3RNbnB0TFRJZ0xqSTNNMk11TXpZM0lEQWdMalkyTnk0eU9EWXVOalkzTGpZek5pQXdJQzR6TlMwdU15NDJNell0TGpZMk55NDJNell0TGpNMk55QXdMUzQyTmpjdExqSTROaTB1TmpZM0xTNDJNellnTUMwdU16VXVNeTB1TmpNMkxqWTJOeTB1TmpNMmVrMHhNaUF4TTBnMFlURWdNU0F3SURBZ01TMHhMVEZXTldFeElERWdNQ0F3SURFZ01TMHhhREYyTW1nMlZqUm9NV0V4SURFZ01DQXdJREVnTVNBeGRqZGhNU0F4SURBZ01DQXhMVEVnTVhvaUlHWnBiR3c5SWlORlEwWXdSakVpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLXBpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRJdU5TQXhNeTQxYkRRdE5FMHhOQ0EyWXkwdU16a3VOVEk1TFM0M01qUXVPRFl5TFRFZ01YTXRMall4TGpFek9DMHhJREJzTFRJZ01tTXVNVE00TGpreUxqRXpPQ0F4TGpVNE5pQXdJREl0TGpFek9DNDBNVFF0TGpRM01TNDNORGd0TVNBeFREUWdOMk11TURndExqUTNNUzQwTVRRdExqZ3dOU0F4TFRFZ0xqVTROaTB1TVRrMUlERXVNalV5TFM0eE9UVWdNaUF3YkRJdE1tTXRMakU1TlMwdU1qYzJMUzR4T1RVdExqWXhJREF0TVhNdU5USTVMUzQzTWpRZ01TMHhiRFFnTkhvaUlITjBjbTlyWlQwaUkwVkRSakJHTVNJZ1ptbHNiRDBpYm05dVpTSXZQand2YzNablBnPT0pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tcGl2b3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2djM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGp4d1lYUm9JR1E5SWsweE15NDFJRFF1TldndE9XMHdJREIyT1NJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5OeGRXRnlaU0l2UGp4d1lYUm9JR1E5SWswM0xqVWdNVEl1Tld3dE1TMHhJREV0TVcwMUxUTnNMVEV0TVMweElERWlMejQ4Y0dGMGFDQmtQU0pOTkM0MUlERXhMalZvTFRKdE5pMDVkakp0TFRNdE1uWXliVFl0TW5ZeUlpQnpkSEp2YTJVdGJHbHVaV05oY0QwaWMzRjFZWEpsSWk4K1BIQmhkR2dnWkQwaVRURXhMalVnTmk0MWRqTmhNaUF5SURBZ01DQXhMVElnTW1ndE15SXZQanh3WVhSb0lHUTlJazAwTGpVZ09DNDFhQzB5YlRJdE0yZ3RNaUlnYzNSeWIydGxMV3hwYm1WallYQTlJbk54ZFdGeVpTSXZQanh5WldOMElIZzlJakV1TlNJZ2VUMGlNUzQxSWlCM2FXUjBhRDBpTVRNaUlHaGxhV2RvZEQwaU1UTWlJSEo0UFNJeUlpOCtQQzluUGp3dmMzWm5QZz09KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLXBsdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUSXVOU0EyTGpWb05IWXROR2d5ZGpSb05IWXlhQzAwZGpSb0xUSjJMVFJvTFRSNklpQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlHWnBiR3c5SW01dmJtVWlMejQ4TDNOMlp6ND0pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tcmlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRURXpMalVnTnk0MWJDMDBJRFJNT0NBeE1Hd3hMalV0TVM0MWFDMDNkaTB5YURkTU9DQTFiREV1TlMweExqVjZJaUJ6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLXNtYWxsLWxlZnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUZ2dORXcwSURoc05DQTBJaUJ6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLXNtYWxsLXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVGdnTVRKc05DMDBMVFF0TkNJZ2MzUnliMnRsUFNJalJVTkdNRVl4SWlCbWFXeHNQU0p1YjI1bElpOCtQQzl6ZG1jKyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1zbWFsbC11cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRFeUlEaE1PQ0EwSURRZ09DSWdjM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaTgrUEM5emRtYyspO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tc21hbGwtZG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRRZ09HdzBJRFFnTkMwMElpQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlHWnBiR3c5SW01dmJtVWlMejQ4TDNOMlp6ND0pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tdGljayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRFeUlEWnNMVFV1TlNBMUxqVk1OQ0E1SWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1jcm9zcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRFd0xqVWdOUzQxYkMwMklEWnRNQzAyYkRZZ05pSWdjM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaTgrUEM5emRtYyspO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tdHJlZS1vcGVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVFFnTjJ3MElEUWdOQzAwSWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi10cmVlLWNsb3NlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRZZ01USnNOQzAwTFRRdE5DSWdjM1J5YjJ0bFBTSWpSVU5HTUVZeElpQm1hV3hzUFNKdWIyNWxJaTgrUEM5emRtYyspO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tdHJlZS1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVE11TlNBM0xqVm9PU0lnYzNSeWIydGxQU0lqUlVOR01FWXhJaUJtYVd4c1BTSnViMjVsSWlCemRISnZhMlV0YkdsdVpXTmhjRDBpYzNGMVlYSmxJaTgrUEM5emRtYyspO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1jZWxsLW1lbnUtYnV0dG9uIC5hZy1pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMzJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tY2hlY2tib3gtY2hlY2tlZDplbXB0eSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lQanhrWldaelBqeHlaV04wSUdsa1BTSmhJaUI0UFNJeElpQjVQU0l4SWlCM2FXUjBhRDBpTVRRaUlHaGxhV2RvZEQwaU1UUWlJSEo0UFNJeUlpOCtQQzlrWldaelBqeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK1BIVnpaU0JtYVd4c1BTSWpNa1F6TkRNMklpQjRiR2x1YXpwb2NtVm1QU0lqWVNJdlBqeHlaV04wSUhOMGNtOXJaVDBpSXpBd1FqQkdSaUlnZUQwaU1TNDFJaUI1UFNJeExqVWlJSGRwWkhSb1BTSXhNeUlnYUdWcFoyaDBQU0l4TXlJZ2NuZzlJaklpTHo0OGNHRjBhQ0J6ZEhKdmEyVTlJaU13TUVJd1JrWWlJR1E5SWsweE1pQTFiQzAxTGpVZ05TNDFURFFnT0NJdlBqd3ZaejQ4TDNOMlp6ND0pOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbWVudSB7XG4gICAgYmFja2dyb3VuZDogIzJkMzQzNjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB6LWluZGV4OiA1OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1tZW51IC5hZy1tZW51LWxpc3Qge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLW1lbnUgLmFnLW1lbnUtb3B0aW9uIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7IH1cbiAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbWVudSAuYWctbWVudS1vcHRpb24gPiBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbWVudSAuYWctbWVudS1vcHRpb24tYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDQ3NDk7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLW1lbnUgLmFnLW1lbnUtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNTsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbWVudSAuYWctbWVudS1vcHRpb24taWNvbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1tZW51IC5hZy1tZW51LW9wdGlvbi1pY29uIHNwYW4ge1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLW1lbnUgLmFnLW1lbnUtb3B0aW9uLXNob3J0Y3V0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1tZW51IC5hZy1tZW51LXNlcGFyYXRvciB7XG4gICAgICBtYXJnaW4tbGVmdDogLTRweDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1tZW51IC5hZy1tZW51LXNlcGFyYXRvciA+IHNwYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnJTIwd2lkdGglM0QnMSclMjBoZWlnaHQlM0QnOHB4JyUyMHZpZXdCb3glM0QnMCUyMDAlMjAxJTIwOHB4JyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclM0UlM0NsaW5lJTIweDElM0QnMCclMjB5MSUzRCc0cHgnJTIweDIlM0QnMSclMjB5MiUzRCc0cHgnJTIwc3Ryb2tlLXdpZHRoJTNEJzEnJTIwc3Ryb2tlJTNEJyUyMzQyNDI0MiclMkYlM0UlM0MlMkZzdmclM0VcIik7XG4gICAgICAgIGhlaWdodDogOHB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1tZW51IC5hZy1tZW51LW9wdGlvbi1wb3B1cC1wb2ludGVyIHtcbiAgICAgIHdpZHRoOiAyNHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyay5hZy1kbmQtZ2hvc3Qge1xuICAgIGJhY2tncm91bmQ6ICMyZDM0MzY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQyNDI7XG4gICAgY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC42NCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcbiAgICB6LWluZGV4OiAxMDAwMDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyay5hZy1kbmQtZ2hvc3Qgc3BhbixcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsuYWctZG5kLWdob3N0IGRpdiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsuYWctZG5kLWdob3N0IC5hZy1kbmQtZ2hvc3QtaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIG9wYWNpdHk6IDAuODc7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10YWItaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWMxZjIwO1xuICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRhYi1oZWFkZXIgLmFnLXRhYiB7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRhYi1oZWFkZXIgLmFnLXRhYi5hZy10YWItc2VsZWN0ZWQgLmFnLWljb24tZmlsdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRNdU5TQXpMalZvT1hZdU5UZzJZVEVnTVNBd0lEQWdNUzB1TWprekxqY3dOMHc1TGpJNU15QTNMamN3TjBFeElERWdNQ0F3SURBZ09TQTRMalF4TkZZeE1Hd3RNaUF4TGpWV09DNDBNVFJoTVNBeElEQWdNQ0F3TFM0eU9UTXRMamN3TjB3ekxqYzVNeUEwTGpjNU0yRXhJREVnTUNBd0lERXRMakk1TXkwdU56QTNWak11TlhvaUlITjBjbTlyWlQwaUl6QXdRakJHUmlJZ1ptbHNiRDBpYm05dVpTSXZQand2YzNablBnPT0pO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdGFiLWhlYWRlciAuYWctdGFiLmFnLXRhYi1zZWxlY3RlZCAuYWctaWNvbi1jb2x1bW5zIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRZdU5TQXpMalYyT0cwekxUaDJPRzB6TFRoMk9HMHRPUzA0ZGpnaUlITjBjbTlyWlQwaUl6QXdRakJHUmlJZ1ptbHNiRDBpYm05dVpTSWdjM1J5YjJ0bExXeHBibVZqWVhBOUluTnhkV0Z5WlNJdlBqd3ZjM1puUGc9PSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10YWItaGVhZGVyIC5hZy10YWIuYWctdGFiLXNlbGVjdGVkIC5hZy1pY29uLW1lbnUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVE11TlNBMExqVm9PVzB0T1NBemFEbHRMVGtnTTJnNUlpQnpkSEp2YTJVOUlpTXdNRUl3UmtZaUlHWnBiR3c5SW01dmJtVWlJSE4wY205clpTMXNhVzVsWTJGd1BTSnpjWFZoY21VaUx6NDhMM04yWno0PSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRhYi1ib2R5IHtcbiAgICBwYWRkaW5nOiA0cHggMDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdGFiLWJvZHkgLmFnLWZpbHRlci1zZWxlY3Qge1xuICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdGFiLWJvZHkgLmFnLW1lbnUtbGlzdCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgbWFyZ2luLXRvcDogMDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10YWItYm9keSAuYWctbWVudS1saXN0ID4gZGl2OmZpcnN0LWNoaWxkID4gc3BhbiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwOyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRhYi1ib2R5IC5hZy1tZW51LWxpc3QgPiBkaXY6bGFzdC1jaGlsZCA+IHNwYW4ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10YWItYm9keSAuYWctbWVudS1saXN0ID4gZGl2Omxhc3QtY2hpbGQgPiAuYWctbWVudS1vcHRpb24tcG9wdXAtcG9pbnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlci1zZWxlY3Qge1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmlsdGVyIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgbWFyZ2luOiAwIDNweCAwIDZweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlciBpbnB1dFt0eXBlPVwidGV4dFwiXSxcbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1maWx0ZXIgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICAgIHBhZGRpbmctbGVmdDogNHB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1maWx0ZXIgaW5wdXRbdHlwZT1cInRleHRcIl06ZGlzYWJsZWQsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1maWx0ZXIgaW5wdXRbdHlwZT1cImRhdGVcIl06ZGlzYWJsZWQge1xuICAgICAgY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4zOCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuMyk7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1maWx0ZXIgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmlsdGVyIC5hZy1zZXQtZmlsdGVyLWxpc3Qge1xuICAgIGhlaWdodDogMTgycHg7XG4gICAgcGFkZGluZy10b3A6IDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlciAuYWctZmlsdGVyLWhlYWRlci1jb250YWluZXIge1xuICAgIGhlaWdodDogMjhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlciAuYWctZmlsdGVyLWhlYWRlci1jb250YWluZXI6bnRoLWNoaWxkKDIpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQyNDI0MjsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlciAuYWctZmlsdGVyLWNoZWNrYm94IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgcGFkZGluZy10b3A6IDJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlciAuYWctZmlsdGVyLXZhbHVlIHtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1maWx0ZXIgLmFnLWZpbHRlci1hcHBseS1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1maWx0ZXIgLmFnLWZpbHRlci1hcHBseS1wYW5lbCBidXR0b24gKyBidXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1zZWxlY3QtcGFuZWwgLmFnLWNvbHVtbi10b29sLXBhbmVsLWNvbHVtbi1ncm91cCxcbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tc2VsZWN0LXBhbmVsIC5hZy1jb2x1bW4tdG9vbC1wYW5lbC1jb2x1bW4ge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uLWdyb3VwIHNwYW4sXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tc2VsZWN0LXBhbmVsIC5hZy1jb2x1bW4tdG9vbC1wYW5lbC1jb2x1bW4gc3BhbiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uLWdyb3VwIC5hZy1jb2x1bW4tc2VsZWN0LWluZGVudCxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1zZWxlY3QtcGFuZWwgLmFnLWNvbHVtbi10b29sLXBhbmVsLWNvbHVtbiAuYWctY29sdW1uLXNlbGVjdC1pbmRlbnQge1xuICAgICAgd2lkdGg6IDhweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uLWdyb3VwIC5hZy1jb2x1bW4tc2VsZWN0LWNoZWNrYm94LFxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uLWdyb3VwIC5hZy1jb2x1bW4tZ3JvdXAtaWNvbnMsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tc2VsZWN0LXBhbmVsIC5hZy1jb2x1bW4tdG9vbC1wYW5lbC1jb2x1bW4gLmFnLWNvbHVtbi1zZWxlY3QtY2hlY2tib3gsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tc2VsZWN0LXBhbmVsIC5hZy1jb2x1bW4tdG9vbC1wYW5lbC1jb2x1bW4gLmFnLWNvbHVtbi1ncm91cC1pY29ucyB7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tc2VsZWN0LXBhbmVsIC5hZy1wcmltYXJ5LWNvbHMtbGlzdC1wYW5lbCB7XG4gICAgcGFkZGluZy10b3A6IDRweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctcHJpbWFyeS1jb2xzLWxpc3QtcGFuZWwgPiBkaXYge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uLmFnLXRvb2xwYW5lbC1hZGQtZ3JvdXAtaW5kZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlci1maWx0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXByaW1hcnktY29scy1oZWFkZXItcGFuZWwge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MjQyO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wcmltYXJ5LWNvbHMtaGVhZGVyLXBhbmVsID4gZGl2IHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMnB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wcmltYXJ5LWNvbHMtaGVhZGVyLXBhbmVsIC5hZy1maWx0ZXItYm9keSB7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ncm91cC1jaGlsZC1jb3VudDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWZpbHRlci1wYW5lbCB7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWZpbHRlci1wYW5lbCAuYWctZmlsdGVyLXRvb2xwYW5lbC1pbnN0YW5jZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNjQpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwOyB9XG4gICAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdG9vbC1wYW5lbC13cmFwcGVyIC5hZy1maWx0ZXItcGFuZWwgLmFnLWZpbHRlci10b29scGFuZWwtaW5zdGFuY2UgLmFnLWZpbHRlci10b29scGFuZWwtaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMCA1cHggNXB4OyB9XG4gICAgICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWZpbHRlci1wYW5lbCAuYWctZmlsdGVyLXRvb2xwYW5lbC1pbnN0YW5jZSAuYWctZmlsdGVyLXRvb2xwYW5lbC1oZWFkZXIgPiBkaXYge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7IH1cbiAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdG9vbC1wYW5lbC13cmFwcGVyIC5hZy1maWx0ZXItcGFuZWwgLmFnLWZpbHRlci1ib2R5LXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctZmlsdGVyLXBhbmVsIC5hZy1maWx0ZXItYWlyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQyNDI0MjtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDA7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctcGl2b3QtbW9kZS1wYW5lbCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQyNDI0MjtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctcGl2b3QtbW9kZS1wYW5lbCBzcGFuIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLXBpdm90LW1vZGUtcGFuZWwgLmFnLXBpdm90LW1vZGUtc2VsZWN0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxuICAgICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctcGl2b3QtbW9kZS1wYW5lbCAuYWctcGl2b3QtbW9kZS1zZWxlY3QgLmFnLWNoZWNrYm94LWxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWNvbHVtbi1zZWxlY3QtcGFuZWwge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MjQyNDI7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgcGFkZGluZy10b3A6IDA7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctY29sdW1uLWRyb3Age1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MjQyNDI7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctY29sdW1uLWRyb3AgLmFnLWljb24ge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgNHB4OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctY29sdW1uLWRyb3AgLmFnLWNvbHVtbi1kcm9wLXRpdGxlIHtcbiAgICAgICAgY2xlYXI6IHJpZ2h0O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0cHgpOyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctY29sdW1uLWRyb3AgLmFnLWNvbHVtbi1kcm9wLWVtcHR5LW1lc3NhZ2Uge1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4zOCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBsaW5lLWhlaWdodDogOHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWNvbHVtbi1kcm9wOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmlsdGVyLWljb246ZW1wdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUTXVOU0F6TGpWb09YWXVOVGcyWVRFZ01TQXdJREFnTVMwdU1qa3pMamN3TjB3NUxqSTVNeUEzTGpjd04wRXhJREVnTUNBd0lEQWdPU0E0TGpReE5GWXhNR3d0TWlBeExqVldPQzQwTVRSaE1TQXhJREFnTUNBd0xTNHlPVE10TGpjd04wd3pMamM1TXlBMExqYzVNMkV4SURFZ01DQXdJREV0TGpJNU15MHVOekEzVmpNdU5Yb2lJSE4wY205clpUMGlJMFZEUmpCR01TSWdabWxzYkQwaWJtOXVaU0l2UGp3dmMzWm5QZz09KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNvcnQtYXNjZW5kaW5nLWljb246ZW1wdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUY3VOU0F4TWxZMGJUTWdNaTQxYkMwekxUTXRNeUF6SWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1zb3J0LWRlc2NlbmRpbmctaWNvbjplbXB0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRjdU5TQXhNVll6YlMweklEVXVOV3d6SURNZ015MHpJaUJ6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNvcnQtbm9uZS1pY29uOmVtcHR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVEV4TGpVZ01USldORzB6SURJdU5Xd3RNeTB6TFRNZ00yMHROQ0EwTGpWV00yMHRNeUExTGpWc015QXpJRE10TXlJZ2MzUnliMnRsUFNJalJVTkdNRVl4SWlCbWFXeHNQU0p1YjI1bElpOCtQQzl6ZG1jKyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1udW1lcmljLWhlYWRlciAuYWctaGVhZGVyLWNlbGwtbGFiZWwgLmFnLWhlYWRlci1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXBhZ2luZy1wYW5lbCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQyNDI0MjtcbiAgICBjb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjY0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDAgMTJweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcGFnaW5nLXBhbmVsID4gc3BhbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgYnV0dG9uW3JlZj1cImJ0Rmlyc3RcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRURXlJRFJNT0NBNGJEUWdORTAwTGpVZ05IWTRJaUJ6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtaW5kZW50OiAxMDAlO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG9wYWNpdHk6IDAuNjQ7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayBidXR0b25bcmVmPVwiYnRGaXJzdFwiXVtkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC4zODsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgYnV0dG9uW3JlZj1cImJ0UHJldmlvdXNcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUa2dORXcxSURoc05DQTBJaUJ6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtaW5kZW50OiAxMDAlO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG9wYWNpdHk6IDAuNjQ7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayBidXR0b25bcmVmPVwiYnRQcmV2aW91c1wiXVtkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC4zODsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgYnV0dG9uW3JlZj1cImJ0TGFzdFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRRZ01USnNOQzAwTFRRdE5HMDNMalVnTUhZNElpQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlHWnBiR3c5SW01dmJtVWlMejQ4TDNOMlp6ND0pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgb3BhY2l0eTogMC42NDtcbiAgICBwYWRkaW5nOiAwOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIGJ1dHRvbltyZWY9XCJidExhc3RcIl1bZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDAuMzg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIGJ1dHRvbltyZWY9XCJidE5leHRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUWWdNVEpzTkMwMExUUXROQ0lnYzNSeWIydGxQU0lqUlVOR01FWXhJaUJtYVd4c1BTSnViMjVsSWk4K1BDOXpkbWMrKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtaW5kZW50OiAxMDAlO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiAwO1xuICAgIG9wYWNpdHk6IDAuNjQ7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayBidXR0b25bcmVmPVwiYnROZXh0XCJdW2Rpc2FibGVkXSB7XG4gICAgICBvcGFjaXR5OiAwLjM4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIGJ1dHRvbltyZWY9XCJidEZpcnN0XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVFFnTVRKc05DMDBMVFF0TkcwM0xqVWdNSFk0SWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgYnV0dG9uW3JlZj1cImJ0UHJldmlvdXNcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRUWWdNVEpzTkMwMExUUXROQ0lnYzNSeWIydGxQU0lqUlVOR01FWXhJaUJtYVd4c1BTSnViMjVsSWk4K1BDOXpkbWMrKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgb3BhY2l0eTogMC44NztcbiAgICB3aWR0aDogMTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCBidXR0b25bcmVmPVwiYnRMYXN0XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVEV5SURSTU9DQTRiRFFnTkUwMExqVWdOSFk0SWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgYnV0dG9uW3JlZj1cImJ0TmV4dFwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRrZ05FdzFJRGhzTkNBMElpQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlHWnBiR3c5SW01dmJtVWlMejQ4TDNOMlp6ND0pO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjg3O1xuICAgIHdpZHRoOiAxNnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcm93LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ODgwOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY2VsbC1yYW5nZS1zZWxlY3RlZDpub3QoLmFnLWNlbGwtZm9jdXMpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE3NiwgMjU1LCAwLjIpOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY2VsbC1yYW5nZS1zZWxlY3RlZC0xOm5vdCguYWctY2VsbC1mb2N1cykge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTc2LCAyNTUsIDAuMyk7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLXJhbmdlLXNlbGVjdGVkLTI6bm90KC5hZy1jZWxsLWZvY3VzKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNzYsIDI1NSwgMC40KTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQtMzpub3QoLmFnLWNlbGwtZm9jdXMpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE3NiwgMjU1LCAwLjUpOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY2VsbC1yYW5nZS1zZWxlY3RlZC00Om5vdCguYWctY2VsbC1mb2N1cykge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTc2LCAyNTUsIDAuNik7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLWlubGluZS1lZGl0aW5nIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB6LWluZGV4OiAyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY2VsbC1pbmxpbmUtZWRpdGluZywgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wb3B1cC1lZGl0b3Ige1xuICAgIGJhY2tncm91bmQ6ICMyZDM0MzY7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFmMjA7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNlbGwtaW5saW5lLWVkaXRpbmcgaW5wdXRbdHlwZT1cInRleHRcIl06ZGlzYWJsZWQsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLWlubGluZS1lZGl0aW5nIGlucHV0W3R5cGU9XCJ0ZWxcIl06ZGlzYWJsZWQsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLWlubGluZS1lZGl0aW5nIGlucHV0W3R5cGU9XCJkYXRlXCJdOmRpc2FibGVkLFxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY2VsbC1pbmxpbmUtZWRpdGluZyBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl06ZGlzYWJsZWQsIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcG9wdXAtZWRpdG9yIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmRpc2FibGVkLFxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcG9wdXAtZWRpdG9yIGlucHV0W3R5cGU9XCJ0ZWxcIl06ZGlzYWJsZWQsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wb3B1cC1lZGl0b3IgaW5wdXRbdHlwZT1cImRhdGVcIl06ZGlzYWJsZWQsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wb3B1cC1lZGl0b3IgaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdOmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMzgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjMpOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLWlubGluZS1lZGl0aW5nIHNlbGVjdCwgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wb3B1cC1lZGl0b3Igc2VsZWN0IHtcbiAgICAgIGhlaWdodDogYXV0bzsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXBvcHVwLWVkaXRvciB7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wb3B1cC1lZGl0b3IgLmFnLWxhcmdlLXRleHRhcmVhIHRleHRhcmVhIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIHBhZGRpbmc6IDEycHg7IH1cbiAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcG9wdXAtZWRpdG9yIC5hZy1sYXJnZS10ZXh0YXJlYSB0ZXh0YXJlYTpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMzgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCA0NiwgNDYsIDAuMyk7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1yaWNoLXNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWYyMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVFFnTjJ3MElEUWdOQzAwSWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogOHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJpY2gtc2VsZWN0IC5hZy1yaWNoLXNlbGVjdC1saXN0IHtcbiAgICAgIGhlaWdodDogMTgycHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJpY2gtc2VsZWN0IC5hZy1yaWNoLXNlbGVjdC12YWx1ZSB7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTJweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcmljaC1zZWxlY3QgLmFnLXZpcnR1YWwtbGlzdC1pdGVtIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIGhlaWdodDogMjhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJpY2gtc2VsZWN0IC5hZy12aXJ0dWFsLWxpc3QtaXRlbTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDQ3NDk7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJpY2gtc2VsZWN0IC5hZy1yaWNoLXNlbGVjdC1yb3cge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1yaWNoLXNlbGVjdCAuYWctcmljaC1zZWxlY3Qtcm93LXNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU4ODA7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1mbG9hdGluZy1maWx0ZXItYm9keSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjRweCk7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZsb2F0aW5nLWZpbHRlci1ib2R5IGlucHV0OmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMzgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjMpOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmxvYXRpbmctZmlsdGVyLWZ1bGwtYm9keSBpbnB1dDpkaXNhYmxlZCB7XG4gICAgY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4zOCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjMpOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmxvYXRpbmctZmlsdGVyLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZsb2F0aW5nLWZpbHRlci1idXR0b24gYnV0dG9uIHtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNlbGwtbGFiZWwtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZjIwO1xuICAgIGNvbG9yOiAjRjVGNUY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICMzNDM5M2I7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxczsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdG9vbHRpcC5hZy10b29sdGlwLWhpZGluZyB7XG4gICAgICBvcGFjaXR5OiAwOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaGVhZGVyLWdyb3VwLWNlbGwtbGFiZWwge1xuICAgIGhlaWdodDogMTAwJTsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaGVhZGVyLWdyb3VwLWNlbGwtbGFiZWwgc3BhbiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1zZWxlY3QtYWxsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1oZWFkZXItc2VsZWN0LWFsbCBzcGFuIHtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1zZWxlY3QtYWxsOm5vdCguYWctaGlkZGVuKSArIC5hZy1jZWxsLWxhYmVsLWNvbnRhaW5lciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHggLSAxMnB4KTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNlbGVjdGlvbi1jaGVja2JveCB+IC5hZy1jZWxsLXZhbHVlOm5vdCg6ZW1wdHkpLCAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNlbGVjdGlvbi1jaGVja2JveCArIC5hZy1ncm91cC12YWx1ZTpub3QoOmVtcHR5KSxcbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ncm91cC1jaGVja2JveDpub3QoLmFnLWludmlzaWJsZSkgfiAuYWctY2VsbC12YWx1ZTpub3QoOmVtcHR5KSxcbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ncm91cC1jaGVja2JveDpub3QoLmFnLWludmlzaWJsZSkgKyAuYWctZ3JvdXAtdmFsdWU6bm90KDplbXB0eSksXG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZ3JvdXAtZXhwYW5kZWQ6bm90KC5hZy1oaWRkZW4pIH4gLmFnLWNlbGwtdmFsdWU6bm90KDplbXB0eSksXG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZ3JvdXAtZXhwYW5kZWQ6bm90KC5hZy1oaWRkZW4pICsgLmFnLWdyb3VwLXZhbHVlOm5vdCg6ZW1wdHkpLFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWdyb3VwLWNvbnRyYWN0ZWQ6bm90KC5hZy1oaWRkZW4pIH4gLmFnLWNlbGwtdmFsdWU6bm90KDplbXB0eSksXG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZ3JvdXAtY29udHJhY3RlZDpub3QoLmFnLWhpZGRlbikgKyAuYWctZ3JvdXAtdmFsdWU6bm90KDplbXB0eSkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNlbGVjdGlvbi1jaGVja2JveCB+IC5hZy1ncm91cC1jaGVja2JveCxcbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ncm91cC1jaGVja2JveDpub3QoLmFnLWludmlzaWJsZSkgfiAuYWctZ3JvdXAtY2hlY2tib3gsXG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZ3JvdXAtZXhwYW5kZWQ6bm90KC5hZy1oaWRkZW4pIH4gLmFnLWdyb3VwLWNoZWNrYm94LFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWdyb3VwLWNvbnRyYWN0ZWQ6bm90KC5hZy1oaWRkZW4pIH4gLmFnLWdyb3VwLWNoZWNrYm94IHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNlbGVjdGlvbi1jaGVja2JveCBzcGFuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ncm91cC1leHBhbmRlZCAuYWctaWNvbi1jb250cmFjdGVkOmVtcHR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVFFnTjJ3MElEUWdOQzAwSWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuODc7XG4gICAgd2lkdGg6IDE2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZjIwO1xuICAgIGhlaWdodDogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwuYWctd2lkdGgtaGFsZiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtNXB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsIHNwYW4ge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwgLmFnLWljb24tZ3JvdXAsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsIC5hZy1pY29uLXBpdm90IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbCAuYWctcmlnaHQtYXJyb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVEV6TGpVZ055NDFiQzAwSURSTU9DQXhNR3d4TGpVdE1TNDFhQzAzZGkweWFEZE1PQ0ExYkRFdU5TMHhMalY2SWlCemRISnZhMlU5SWlORlEwWXdSakVpSUdacGJHdzlJbTV2Ym1VaUx6NDhMM04yWno0PSk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjg3O1xuICAgICAgd2lkdGg6IDE2cHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwgLmFnLWxlZnQtYXJyb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVEl1TlNBNExqVnNOQzAwVERnZ05pQTJMalVnTnk0MWFEZDJNbWd0TjB3NElERXhiQzB4TGpVZ01TNDFlaUlnYzNSeWIydGxQU0lqUlVOR01FWXhJaUJtYVd4c1BTSnViMjVsSWk4K1BDOXpkbWMrKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIG9wYWNpdHk6IDAuODc7XG4gICAgICB3aWR0aDogMTZweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbCAuYWctbGVmdC1hcnJvdyxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwgLmFnLXJpZ2h0LWFycm93IHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LWluZGVudDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICBvcGFjaXR5OiAwLjY0OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsIC5hZy1jb2x1bW4tZHJvcC1lbXB0eS1tZXNzYWdlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgb3BhY2l0eTogMC4zODsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWNlbGwge1xuICAgIGJhY2tncm91bmQ6ICMzMjM5M2M7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgcGFkZGluZzogMCAycHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWNlbGwgLmFnLWNvbHVtbi1kcm9wLWNlbGwtdGV4dCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgIG1hcmdpbjogMCA0cHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWNlbGwgLmFnLWNvbHVtbi1kcm9wLWNlbGwtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEdjZ2MzUnliMnRsUFNJalJVTkdNRVl4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQanh3WVhSb0lHUTlJazB4TUM0MUlEUXVOV3d0TmlBMklpOCtQR05wY21Oc1pTQmplRDBpTnk0MUlpQmplVDBpTnk0MUlpQnlQU0kxTGpVaUx6NDhjR0YwYUNCa1BTSk5OQzQxSURRdU5XdzJJRFlpTHo0OEwyYytQQzl6ZG1jKyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBvcGFjaXR5OiAwLjg3O1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1pbmRlbnQ6IDEwMCU7XG4gICAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgb3BhY2l0eTogMC42NDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tZHJvcC1jZWxsIC5hZy1jb2x1bW4tZHJvcC1jZWxsLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuODc7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWNlbGwgLmFnLWNvbHVtbi1kcmFnIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB3aWR0aDogMTZweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNlbGVjdC1hZ2ctZnVuYy1wb3B1cCB7XG4gICAgYmFja2dyb3VuZDogIzJkMzQzNjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYmFja2dyb3VuZDogIzJkMzQzNjtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZzogMDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctc2VsZWN0LWFnZy1mdW5jLXBvcHVwIC5hZy12aXJ0dWFsLWxpc3QtaXRlbSB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctc2V0LWZpbHRlci1saXN0LFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLW1lbnUtY29sdW1uLXNlbGVjdC13cmFwcGVyIHtcbiAgICB3aWR0aDogYXV0bzsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLXZlcnRpY2FsID4gLmFnLWNvbHVtbi1kcm9wLWNlbGwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi10b3A6IDA7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLWRhdGEtY2hhbmdlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMTYwLCAxMzMsIDAuNSkgIWltcG9ydGFudDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNlbGwtZGF0YS1jaGFuZ2VkLWFuaW1hdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxczsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJvdy1zdHViIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctc3R1Yi1jZWxsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgcGFkZGluZy10b3A6IDRweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctc3R1Yi1jZWxsIC5hZy1sb2FkaW5nLWljb24ge1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXN0dWItY2VsbCAuYWctbG9hZGluZy10ZXh0IHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIG1hcmdpbi10b3A6IDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZsb2F0aW5nLXRvcCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MjQyNDI7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1mbG9hdGluZy1ib3R0b20ge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDI0MjQyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmxvYXRpbmctdG9wLCAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZsb2F0aW5nLWJvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmxvYXRpbmctdG9wIC5hZy1yb3csIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmxvYXRpbmctYm90dG9tIC5hZy1yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctbnVtZXJpYy1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctaGVhZGVyLWNlbGwtbWVudS1idXR0b24ge1xuICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctaGVhZGVyLWNlbGwtbGFiZWwgPiBzcGFuIHtcbiAgICAgIGZsb2F0OiByaWdodDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1oZWFkZXItY2VsbC1sYWJlbCAuYWctaGVhZGVyLWljb24ge1xuICAgICAgbWFyZ2luLXRvcDogMnB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLW51bWVyaWMtaGVhZGVyIC5hZy1oZWFkZXItY2VsbC1tZW51LWJ1dHRvbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctbnVtZXJpYy1oZWFkZXIgLmFnLWhlYWRlci1jZWxsLWxhYmVsIHtcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctbnVtZXJpYy1oZWFkZXIgLmFnLWhlYWRlci1jZWxsLWxhYmVsID4gc3BhbiB7XG4gICAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctcGl2b3QtbW9kZS1wYW5lbCBzcGFuIHtcbiAgICAgIGZsb2F0OiByaWdodDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLXBpdm90LW1vZGUtcGFuZWwgLmFnLXBpdm90LW1vZGUtc2VsZWN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctdG9vbC1wYW5lbC13cmFwcGVyIC5hZy1waXZvdC1tb2RlLXBhbmVsIC5hZy1waXZvdC1tb2RlLXNlbGVjdCAuYWctY2hlY2tib3gtbGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWNvbHVtbi1kcm9wIC5hZy1pY29uIHtcbiAgICAgIGZsb2F0OiByaWdodDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWNvbHVtbi1kcm9wIC5hZy1jb2x1bW4tZHJvcC10aXRsZSB7XG4gICAgICBjbGVhcjogbGVmdDtcbiAgICAgIGZsb2F0OiByaWdodDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWNvbHVtbi1kcm9wIC5hZy1jb2x1bW4tZHJvcC1lbXB0eS1tZXNzYWdlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMTZweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1maWx0ZXItY2hlY2tib3gge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1jb2x1bW4tc2VsZWN0LXBhbmVsIC5hZy1jb2x1bW4tdG9vbC1wYW5lbC1jb2x1bW4tZ3JvdXAgc3BhbixcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uIHNwYW4ge1xuICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWNvbHVtbi1zZWxlY3QtcGFuZWwgLmFnLWNvbHVtbi10b29sLXBhbmVsLWNvbHVtbi1ncm91cCAuYWctY29sdW1uLXNlbGVjdC1jaGVja2JveCxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uLWdyb3VwIC5hZy1jb2x1bW4tZ3JvdXAtaWNvbnMsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWNvbHVtbi1zZWxlY3QtcGFuZWwgLmFnLWNvbHVtbi10b29sLXBhbmVsLWNvbHVtbiAuYWctY29sdW1uLXNlbGVjdC1jaGVja2JveCxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uIC5hZy1jb2x1bW4tZ3JvdXAtaWNvbnMge1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWNvbHVtbi1zZWxlY3QtcGFuZWwgLmFnLWNvbHVtbi10b29sLXBhbmVsLWNvbHVtbi5hZy10b29scGFuZWwtYWRkLWdyb3VwLWluZGVudCB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjRweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1pY29uLXRyZWUtY2xvc2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlNVFlpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpVFRrZ05FdzFJRGhzTkNBMElpQnpkSEp2YTJVOUlpTkZRMFl3UmpFaUlHWnBiR3c5SW01dmJtVWlMejQ4TDNOMlp6ND0pO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTZweCAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgb3BhY2l0eTogMC44NztcbiAgICAgIHdpZHRoOiAxNnB4OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWhlYWRlci1ncm91cC1jZWxsLWxhYmVsIHtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWhlYWRlci1ncm91cC1jZWxsLWxhYmVsIHNwYW4ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1oZWFkZXItc2VsZWN0LWFsbDpub3QoLmFnLWhpZGRlbikgKyAuYWctY2VsbC1sYWJlbC1jb250YWluZXIge1xuICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWhlYWRlci1zZWxlY3QtYWxsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXNlbGVjdGlvbi1jaGVja2JveCArIC5hZy1jZWxsLXZhbHVlOm5vdCg6ZW1wdHkpLCAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctc2VsZWN0aW9uLWNoZWNrYm94ICsgLmFnLWdyb3VwLXZhbHVlOm5vdCg6ZW1wdHkpLFxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1ncm91cC1jaGVja2JveCArIC5hZy1jZWxsLXZhbHVlOm5vdCg6ZW1wdHkpLFxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1ncm91cC1jaGVja2JveCArIC5hZy1ncm91cC12YWx1ZTpub3QoOmVtcHR5KSxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctZ3JvdXAtZXhwYW5kZWQgKyAuYWctY2VsbC12YWx1ZTpub3QoOmVtcHR5KSxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctZ3JvdXAtZXhwYW5kZWQgKyAuYWctZ3JvdXAtdmFsdWU6bm90KDplbXB0eSksXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWdyb3VwLWNvbnRyYWN0ZWQgKyAuYWctY2VsbC12YWx1ZTpub3QoOmVtcHR5KSxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctZ3JvdXAtY29udHJhY3RlZCArIC5hZy1ncm91cC12YWx1ZTpub3QoOmVtcHR5KSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1zZWxlY3Rpb24tY2hlY2tib3ggKyAuYWctZ3JvdXAtY2hlY2tib3gsXG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWdyb3VwLWNoZWNrYm94ICsgLmFnLWdyb3VwLWNoZWNrYm94LFxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1ncm91cC1leHBhbmRlZCArIC5hZy1ncm91cC1jaGVja2JveCxcbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctZ3JvdXAtY29udHJhY3RlZCArIC5hZy1ncm91cC1jaGVja2JveCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7IH1cbiAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsIHNwYW4ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7IH1cbiAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbCAuYWctaWNvbi1ncm91cCxcbiAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsIC5hZy1pY29uLXBpdm90IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWNvbHVtbi1kcm9wLWhvcml6b250YWwgLmFnLXJpZ2h0LWFycm93IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFlpSUdobGFXZG9kRDBpTVRZaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaVRURXpMalVnTnk0MWJDMDBJRFJNT0NBeE1Hd3hMalV0TVM0MWFDMDNkaTB5YURkTU9DQTFiREV1TlMweExqVjZJaUJ6ZEhKdmEyVTlJaU5GUTBZd1JqRWlJR1pwYkd3OUltNXZibVVpTHo0OEwzTjJaejQ9KTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBvcGFjaXR5OiAwLjg3O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbCAuYWctbGVmdC1hcnJvdyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU1UWWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStQSEJoZEdnZ1pEMGlUVEl1TlNBNExqVnNOQzAwVERnZ05pQTJMalVnTnk0MWFEZDJNbWd0TjB3NElERXhiQzB4TGpVZ01TNDFlaUlnYzNSeWIydGxQU0lqUlVOR01FWXhJaUJtYVd4c1BTSnViMjVsSWk4K1BDOXpkbWMrKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBvcGFjaXR5OiAwLjg3O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWZsb2F0aW5nLWZpbHRlci1ib2R5IHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLWZsb2F0aW5nLWZpbHRlci1idXR0b24ge1xuICAgICAgZmxvYXQ6IGxlZnQ7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctaGVhZGVyIC5hZy1oZWFkZXItY2VsbC1yZXNpemU6OmFmdGVyIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzQyNDI0MjtcbiAgICAgIGJvcmRlci1yaWdodDogMDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1jb2x1bW4tZHJhZyB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHJpZ2h0OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctc3RhdHVzLWJhciB7XG4gICAgYmFja2dyb3VuZDogIzJkMzQzNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MjQyO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4zOCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbmFtZS12YWx1ZS12YWx1ZSB7XG4gICAgY29sb3I6ICNGNUY1RjU7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1zdGF0dXMtYmFyLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbmFtZS12YWx1ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1kZXRhaWxzLXJvdyB7XG4gICAgcGFkZGluZzogMjBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLW92ZXJsYXktbG9hZGluZy13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1vdmVybGF5LWxvYWRpbmctY2VudGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmQzNDM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNpZGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZjIwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MjQyNDI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MjQyNDI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1zaWRlLWJhciAuYWctc2lkZS1idXR0b25zIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogIzJkMzQzNjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MjQyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNpZGUtYmFyIC5hZy1zaWRlLWJ1dHRvbnMgLmFnLXNpZGUtYnV0dG9uIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiAjRjVGNUY1O1xuICAgICAgICBwYWRkaW5nOiA4cHggMCA4cHggMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogNzJweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMCAxcHggMDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXNpZGUtYmFyIC5hZy1zaWRlLWJ1dHRvbnMgLmFnLXNlbGVjdGVkIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzFmMjA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDFweCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzQyNDI0MjsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctc2lkZS1iYXIgLmFnLXBhbmVsLWNvbnRhaW5lciB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDI0MjQyOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1zaWRlLWJhci5mdWxsLXdpZHRoIC5hZy1wYW5lbC1jb250YWluZXIge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1zaWRlLWJhciAuYWctY29sdW1uLWRyb3Age1xuICAgICAgbWluLWhlaWdodDogNTBweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctc2lkZS1iYXIgLmFnLXBhbmVsLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDI0MjQyO1xuICAgIGJvcmRlci1yaWdodDogMDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctc2lkZS1iYXIuZnVsbC13aWR0aCAuYWctcGFuZWwtY29udGFpbmVyIHtcbiAgICBib3JkZXItbGVmdDogMDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXByaW1hcnktY29scy1maWx0ZXIge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wcmltYXJ5LWNvbHMtZmlsdGVyOmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMzgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDYsIDQ2LCAwLjMpOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcHJpbWFyeS1jb2xzLWZpbHRlci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuc2Fzcy12YXJpYWJsZXM6OmFmdGVyIHtcbiAgICBjb250ZW50OiAneyBcImF1dG9TaXplUGFkZGluZ1wiOiBcIjEycHhcIiwgXCJoZWFkZXJIZWlnaHRcIjogXCIzMnB4XCIsIFwiZ3JvdXBQYWRkaW5nU2l6ZVwiOiBcIjI4cHhcIiwgXCJmb290ZXJQYWRkaW5nQWRkaXRpb25cIjogXCIxNnB4XCIsIFwidmlydHVhbEl0ZW1IZWlnaHRcIjogXCIyOHB4XCIsIFwiYWdnRnVuY1BvcHVwSGVpZ2h0XCI6IFwiOThweFwiLCBcImNoZWNrYm94SW5kZW50V2lkdGhcIjogXCIyMHB4XCIsIFwibGVhZk5vZGVQYWRkaW5nXCI6IFwiMTJweFwiLCBcInJvd0hlaWdodFwiOiBcIjI4cHhcIiwgXCJncmlkU2l6ZVwiOiBcIjRweFwiLCBcImljb25TaXplXCI6IFwiMTZweFwiIH0nO1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjBGRiAhaW1wb3J0YW50OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaGVhZGVyLWNlbGwtcmVzaXplOjphZnRlciB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgbWFyZ2luLXRvcDogOHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaGVhZGVyLWNlbGw6OmFmdGVyLFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWhlYWRlci1ncm91cC1jZWxsOjphZnRlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg2NiwgNjYsIDY2LCAwLjUpO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtaW5kZW50OiAtMjAwMHB4O1xuICAgIHRvcDogMDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctaGVhZGVyLWNlbGw6OmFmdGVyLFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWx0ciAuYWctaGVhZGVyLWdyb3VwLWNlbGw6OmFmdGVyIHtcbiAgICByaWdodDogMDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctaGVhZGVyLWNlbGw6OmFmdGVyLFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctaGVhZGVyLWdyb3VwLWNlbGw6OmFmdGVyIHtcbiAgICBsZWZ0OiAwOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbC5hZy1jb2x1bW4tZHJvcCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyNDI0MjtcbiAgICBib3JkZXItYm90dG9tOiAwOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbHRyIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsLmFnLWNvbHVtbi1kcm9wLmFnLXdpZHRoLWhhbGY6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogMDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbC5hZy1jb2x1bW4tZHJvcC5hZy13aWR0aC1oYWxmOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogMDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJvdyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNWM1YzVjOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcm93LXNlbGVjdGVkIHtcbiAgICBib3JkZXItY29sb3I6ICMwMDU4ODA7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1pY29uLXJvdy1kcmFnIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcmFnIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWNlbGwge1xuICAgIGhlaWdodDogMjRweCAhaW1wb3J0YW50OyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tZHJvcC1jZWxsIC5hZy1jb2x1bW4tZHJvcC1jZWxsLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1kcm9wLWNlbGwgLmFnLWNvbHVtbi1kcm9wLWNlbGwtYnV0dG9uOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tZHJvcC12ZXJ0aWNhbCAuYWctY29sdW1uLWRyb3AtY2VsbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLWRyb3AtdmVydGljYWwgLmFnLWNvbHVtbi1kcm9wLWNlbGwgLmFnLWNvbHVtbi1kcm9wLWNlbGwtdGV4dCB7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jb2x1bW4tZHJvcC1ob3Jpem9udGFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZjIwO1xuICAgIGhlaWdodDogMzJweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbCAuYWctY29sdW1uLWRyb3AtZW1wdHktbWVzc2FnZSB7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLWRyb3AtaG9yaXpvbnRhbCAuYWctY29sdW1uLWRyb3AtY2VsbC10ZXh0IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlciAuYWctZmlsdGVyLWhlYWRlci1jb250YWluZXIge1xuICAgIGhlaWdodDogMjRweDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJvb3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjQyNDI7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1maWx0ZXIgLmFnLWZpbHRlci12YWx1ZSB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0MjQyNDI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MjQyNDI7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4OyB9XG4gICAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uLWdyb3VwLFxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWNvbHVtbi1zZWxlY3QtcGFuZWwgLmFnLWNvbHVtbi10b29sLXBhbmVsLWNvbHVtbiB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7IH1cbiAgICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciAuYWctY29sdW1uLWRyb3Age1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7IH1cbiAgICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdG9vbC1wYW5lbC13cmFwcGVyIC5hZy1jb2x1bW4tZHJvcCAuYWctaWNvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWNvbHVtbi1kcm9wIC5hZy1jb2x1bW4tZHJvcC10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDsgfVxuICAgICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10b29sLXBhbmVsLXdyYXBwZXIgLmFnLWNvbHVtbi1kcm9wIC5hZy1jb2x1bW4tZHJvcC1lbXB0eS1tZXNzYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctcnRsIC5hZy1zaWRlLWJhcixcbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1ydGwgLmFnLXRvb2wtcGFuZWwtd3JhcHBlciB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNDI0MjQyO1xuICAgIGJvcmRlci1yaWdodDogMDsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWljb24tZXhwYW5kZWQsXG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctaWNvbi1jb250cmFjdGVkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJ0bCAuYWctaWNvbi1leHBhbmRlZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCkgcm90YXRlKDE4MGRlZyk7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1tZW51LW9wdGlvbiB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY29sdW1uLXNlbGVjdC1wYW5lbCAuYWctY29sdW1uLXRvb2wtcGFuZWwtY29sdW1uLWdyb3VwLFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNvbHVtbi1zZWxlY3QtcGFuZWwgLmFnLWNvbHVtbi10b29sLXBhbmVsLWNvbHVtbiB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmlsdGVyLWZpbHRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI0MjQyOyB9XG4gICAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10YWItaGVhZGVyIC5hZy10YWIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDsgfVxuICAgIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctdGFiLWhlYWRlciAuYWctdGFiLmFnLXRhYi1zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy10YWItYm9keSxcbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1wb3B1cC1lZGl0b3IsXG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzQzNjtcbiAgICBjb2xvcjogI0Y1RjVGNTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNlbGwtaW5saW5lLWVkaXRpbmcge1xuICAgIGhlaWdodDogMjhweDtcbiAgICBwYWRkaW5nOiAwOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZGV0YWlscy1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDM0MzY7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1vdmVybGF5LWxvYWRpbmctd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctb3ZlcmxheS1sb2FkaW5nLWNlbnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzQzNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI0MjQyO1xuICAgIGNvbG9yOiAjRjVGNUY1O1xuICAgIHBhZGRpbmc6IDE2cHg7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLXJhbmdlLXNlbGVjdGVkLTE6bm90KC5hZy1jZWxsLWZvY3VzKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNzYsIDI1NSwgMC4zKTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWNlbGwtcmFuZ2Utc2VsZWN0ZWQtMjpub3QoLmFnLWNlbGwtZm9jdXMpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE3NiwgMjU1LCAwLjQpOyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctY2VsbC1yYW5nZS1zZWxlY3RlZC0zOm5vdCguYWctY2VsbC1mb2N1cykge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTc2LCAyNTUsIDAuNSk7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1jZWxsLXJhbmdlLXNlbGVjdGVkLTQ6bm90KC5hZy1jZWxsLWZvY3VzKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNzYsIDI1NSwgMC42KTsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLXJpY2gtc2VsZWN0LXZhbHVlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQyNDI0MjsgfVxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgLmFnLWZpbHRlci1hcHBseS1wYW5lbCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MjQyNDI7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIGlucHV0LFxuICAuYWctdGhlbWUtYmFsaGFtLWRhcmsgc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyYzJlO1xuICAgIGNvbG9yOiAjRjVGNUY1OyB9XG4gIC5hZy10aGVtZS1iYWxoYW0tZGFyayAuYWctZmxvYXRpbmctZmlsdGVyLWJvZHkgaW5wdXQge1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cbiAgLmFnLXRoZW1lLWJhbGhhbS1kYXJrIC5hZy1maWx0ZXItdG9vbHBhbmVsLWJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDM0MzY7IH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/bug/bugs/bugs.component.ts":
/*!********************************************!*\
  !*** ./src/app/bug/bugs/bugs.component.ts ***!
  \********************************************/
/*! exports provided: BugsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugsComponent", function() { return BugsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_bug_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bug.service */ "./src/app/bug/services/bug.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bug_dialog_bug_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bug-dialog/bug-dialog.component */ "./src/app/bug/bug-dialog/bug-dialog.component.ts");
/* harmony import */ var _status_dialog_status_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../status-dialog/status-dialog.component */ "./src/app/bug/status-dialog/status-dialog.component.ts");
/* harmony import */ var _customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customs/bugs-cell/bugs-cell.component */ "./src/app/bug/customs/bugs-cell/bugs-cell.component.ts");







let BugsComponent = class BugsComponent {
    constructor(bugService, dialog) {
        this.bugService = bugService;
        this.dialog = dialog;
        this.bugStatus = {};
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columnDefs = [
            { headerName: 'Id', field: 'id', hide: true },
            { headerName: 'Title', field: 'title', sortable: true, filter: true, width: 100 },
            { headerName: 'Description', field: 'description', sortable: true, filter: true, width: 200, cellClass: "cell-wrap-text" },
            { headerName: 'Version', field: 'version', sortable: true, filter: true, width: 100 },
            { headerName: 'Date', field: 'date', sortable: true, filter: true, width: 200 },
            { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 100 },
            { headerName: 'Fixed Version', field: 'fixedVersion', sortable: true, filter: true, width: 150 },
            { headerName: 'Severity', field: 'severity', sortable: true, filter: true, width: 100 },
            { width: 110, cellRendererFramework: _customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_6__["BugsCellComponent"] }
            //   {headerName: 'Created by', field: 'createdByUser',sortable:true,filter:true},
            //   {headerName: 'Assigned to', field: 'assignedTo',sortable:true,filter:true},
        ];
        this.rowSelection = "single";
        this.paginationPageSize = 25;
        this.paginationNoFormatter = function (params) {
            return "[" + params.value.toLocaleString() + "]";
        };
    }
    agInit(params) {
        this.rowData = params.data;
    }
    openDialog() {
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
        const dialogRef = this.dialog.open(_status_dialog_status_dialog_component__WEBPACK_IMPORTED_MODULE_5__["StatusDialogComponent"], {
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
    openCreateDialog() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        //this.dialog.open(BugDialogComponent);
        const dialogRef = this.dialog.open(_bug_dialog_bug_dialog_component__WEBPACK_IMPORTED_MODULE_4__["BugDialogComponent"]);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged() {
        let selectedRows = this.gridApi.getSelectedRows();
        this.rowData = this.gridApi.getSelectedRows();
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
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BugsComponent.prototype, "output", void 0);
BugsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bugs',
        template: __webpack_require__(/*! raw-loader!./bugs.component.html */ "./node_modules/raw-loader/index.js!./src/app/bug/bugs/bugs.component.html"),
        styles: [__webpack_require__(/*! ./bugs.component.css */ "./src/app/bug/bugs/bugs.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], BugsComponent);



/***/ }),

/***/ "./src/app/bug/customs/bug-edit/bug-edit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/bug/customs/bug-edit/bug-edit.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVnL2N1c3RvbXMvYnVnLWVkaXQvYnVnLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYnVnL2N1c3RvbXMvYnVnLWVkaXQvYnVnLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/bug/customs/bug-edit/bug-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/bug/customs/bug-edit/bug-edit.component.ts ***!
  \************************************************************/
/*! exports provided: BugEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugEditComponent", function() { return BugEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user/services/user.service */ "./src/app/user/services/user.service.ts");




let BugEditComponent = class BugEditComponent {
    constructor(dialogRef, data, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
    }
    ngOnInit() {
        this.rowData = this.data;
        this.userService.getAllUsers().subscribe(data => {
            this.userList = data;
        });
        this.userService.getUserWithId(this.data.assignedTo).subscribe(data => {
            this.username = data.username;
        });
    }
    save() {
        console.log(this.username);
        this.dialogRef.close({
            'message': 'EDIT',
            'data': this.rowData
        });
    }
    close() {
        this.dialogRef.close();
    }
};
BugEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bug-edit',
        template: __webpack_require__(/*! raw-loader!./bug-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/bug/customs/bug-edit/bug-edit.component.html"),
        styles: [__webpack_require__(/*! ./bug-edit.component.css */ "./src/app/bug/customs/bug-edit/bug-edit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _user_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], BugEditComponent);



/***/ }),

/***/ "./src/app/bug/customs/bugs-cell/bugs-cell.component.css":
/*!***************************************************************!*\
  !*** ./src/app/bug/customs/bugs-cell/bugs-cell.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.mat-button{\r\n  padding: 3px 3px !important;\r\n  min-width: 24px;\r\n  line-height: 24px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVnL2N1c3RvbXMvYnVncy1jZWxsL2J1Z3MtY2VsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9idWcvY3VzdG9tcy9idWdzLWNlbGwvYnVncy1jZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ubWF0LWJ1dHRvbntcclxuICBwYWRkaW5nOiAzcHggM3B4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/bug/customs/bugs-cell/bugs-cell.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bug/customs/bugs-cell/bugs-cell.component.ts ***!
  \**************************************************************/
/*! exports provided: BugsCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugsCellComponent", function() { return BugsCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bug-edit/bug-edit.component */ "./src/app/bug/customs/bug-edit/bug-edit.component.ts");
/* harmony import */ var _services_bug_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bug.service */ "./src/app/bug/services/bug.service.ts");





let BugsCellComponent = class BugsCellComponent {
    constructor(dialog, bugservice) {
        this.dialog = dialog;
        this.bugservice = bugservice;
    }
    agInit(params) {
        this.rowData = params.data;
        this.gridApi = params.api;
    }
    ngOnInit() {
    }
    onEdit() {
        let dialogRef = this.dialog.open(_bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_3__["BugEditComponent"], {
            data: this.rowData
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.rowData = result.data;
                this.gridApi.refreshCells();
                this.bugservice.updateBug(result.data).subscribe();
            }
        });
    }
    onDetail() {
        // let dialogRef = this.dialog.open();
        // dialogRef.afterClosed().subscribe(result=>{
        //   if(result.message)
        //     console.log(result.message);
        // })
    }
};
BugsCellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bugs-cell',
        template: __webpack_require__(/*! raw-loader!./bugs-cell.component.html */ "./node_modules/raw-loader/index.js!./src/app/bug/customs/bugs-cell/bugs-cell.component.html"),
        styles: [__webpack_require__(/*! ./bugs-cell.component.css */ "./src/app/bug/customs/bugs-cell/bugs-cell.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_bug_service__WEBPACK_IMPORTED_MODULE_4__["BugService"]])
], BugsCellComponent);



/***/ }),

/***/ "./src/app/bug/services/backend.service.ts":
/*!*************************************************!*\
  !*** ./src/app/bug/services/backend.service.ts ***!
  \*************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BackendService = class BackendService {
    constructor(http) {
        this.http = http;
    }
    /**
     *
     * @param url URL to call
     * @param params optional parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    get(url, params) {
        return this.invoke('GET', url, null, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    put(url, data, params) {
        return this.invoke('PUT', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    patch(url, data, params) {
        return this.invoke('PATCH', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    post(url, data, params) {
        return this.invoke('POST', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    delete(url, params) {
        return this.invoke('DELETE', url, null, params);
    }
    invoke(method, url, data = {}, params) {
        const options = {
            body: data,
            params,
            headers: {
                'Accept-Language': 'en',
            }
        };
        if (!url) {
            throw new Error('No URL provided.');
        }
        const requestUrl = `${url}`;
        return this.http.request(method, requestUrl, options);
    }
};
BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BackendService);



/***/ }),

/***/ "./src/app/bug/services/bug.service.ts":
/*!*********************************************!*\
  !*** ./src/app/bug/services/bug.service.ts ***!
  \*********************************************/
/*! exports provided: BugService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugService", function() { return BugService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ "./src/app/bug/services/backend.service.ts");



let BugService = class BugService {
    constructor(backendService) {
        this.backendService = backendService;
    }
    getAllBugs() {
        return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/bugs');
    }
    updateBug(bug) {
        return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/bugs/edit', bug);
    }
    addBug(bug) {
        return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/bugs', bug);
    }
    modifyStatus(b) {
        console.log(b);
        return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/bugs', {
            'id': b.id,
            'status': b.status,
            'severity': b.severity
        });
    }
};
BugService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
], BugService);



/***/ }),

/***/ "./src/app/bug/status-dialog/status-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/bug/status-dialog/status-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1Zy9zdGF0dXMtZGlhbG9nL3N0YXR1cy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bug/status-dialog/status-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bug/status-dialog/status-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: StatusDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusDialogComponent", function() { return StatusDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let StatusDialogComponent = class StatusDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close(this.statusValue);
    }
    close() {
        this.dialogRef.close();
    }
    onChange(mrChange) {
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
        if (this.rowData === "NEW") {
            this.inprogress = false;
            this.rejected = false;
        }
        else if (this.rowData === "REJECTED") {
            this.closed = false;
        }
        else if (this.rowData === "INPROGRESS") {
            this.rejected = false;
            this.info = false;
            this.fixed = false;
        }
        else if (this.rowData === "INFONEEDED") {
            this.inprogress = false;
        }
        else if (this.rowData === "FIXED") {
            this.closed = false;
        }
        else if (this.rowData === "CLOSED")
            this.nulll = false;
        this.title = true;
    }
};
StatusDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-status-dialog',
        template: __webpack_require__(/*! raw-loader!./status-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/bug/status-dialog/status-dialog.component.html"),
        styles: [__webpack_require__(/*! ./status-dialog.component.css */ "./src/app/bug/status-dialog/status-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], StatusDialogComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n\r\n  font-size: 1.2em;\r\n\r\n  color: #999;\r\n\r\n  margin-bottom: 0;\r\n\r\n}\r\n\r\nh2 {\r\n\r\n  font-size: 2em;\r\n\r\n  margin-top: 0;\r\n\r\n  padding-top: 0;\r\n\r\n}\r\n\r\nnav a {\r\n\r\n  padding: 5px 10px;\r\n\r\n  text-decoration: none;\r\n\r\n  margin-top: 10px;\r\n\r\n  display: inline-block;\r\n\r\n  background-color: #eee;\r\n\r\n  border-radius: 4px;\r\n\r\n}\r\n\r\nnav a:visited, a:link {\r\n\r\n  color: #607d8b;\r\n\r\n}\r\n\r\nnav a:hover {\r\n\r\n  color: #039be5;\r\n\r\n  background-color: #cfd8dc;\r\n\r\n}\r\n\r\nnav a.active {\r\n\r\n  color: #039be5;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjs7RUFFaEIsV0FBVzs7RUFFWCxnQkFBZ0I7O0FBRWxCOztBQUVBOztFQUVFLGNBQWM7O0VBRWQsYUFBYTs7RUFFYixjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxpQkFBaUI7O0VBRWpCLHFCQUFxQjs7RUFFckIsZ0JBQWdCOztFQUVoQixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsa0JBQWtCOztBQUVwQjs7QUFFQTs7RUFFRSxjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxjQUFjOztFQUVkLHlCQUF5Qjs7QUFFM0I7O0FBRUE7O0VBRUUsY0FBYzs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gIGNvbG9yOiAjOTk5O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxufVxyXG5cclxuaDIge1xyXG5cclxuICBmb250LXNpemU6IDJlbTtcclxuXHJcbiAgbWFyZ2luLXRvcDogMDtcclxuXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcblxyXG59XHJcblxyXG5uYXYgYSB7XHJcblxyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxufVxyXG5cclxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcclxuXHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcblxyXG59XHJcblxyXG5uYXYgYTpob3ZlciB7XHJcblxyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG5cclxufVxyXG5cclxubmF2IGEuYWN0aXZlIHtcclxuXHJcbiAgY29sb3I6ICMwMzliZTU7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/services/login.service */ "./src/app/login/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _role_services_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../role/services/permission.service */ "./src/app/role/services/permission.service.ts");





let DashboardComponent = class DashboardComponent {
    constructor(router, permissionService, authService) {
        this.router = router;
        this.permissionService = permissionService;
        this.authService = authService;
        this.permissionManagement = false;
        this.userManagement = false;
        this.bugManagement = false;
        this.bugClose = false;
        this.bugExportPDF = false;
        this.isMine = false;
        this.permissions = permissionService.getPermissionsForCurrentUser();
        //this.permissions= this.router.getCurrentNavigation().extras.state.permissions;
        //console.log(this.router.getCurrentNavigation().extras.state.permissions);
    }
    ngOnInit() {
        this.checkPermissions();
    }
    checkPermissions() {
        this.checkPermissionManagement();
        this.checkUserManagement();
        this.checkBugManagement();
        this.checkBugClose();
        this.checkBugExportPDF();
        this.checkIsMine();
    }
    checkPermissionManagement() {
        if (this.permissions.includes("PERMISSION_MANAGEMENT")) {
            this.permissionManagement = false;
        }
        else
            this.permissionManagement = true;
    }
    checkUserManagement() {
        if (this.permissions.includes("USER_MANAGEMENT")) {
            this.userManagement = false;
        }
        else
            this.userManagement = true;
    }
    checkBugManagement() {
        if (this.permissions.includes("BUG_MANAGEMENT")) {
            this.bugManagement = false;
        }
        else
            this.bugManagement = true;
    }
    checkBugClose() {
        if (this.permissions.includes("BUG_CLOSE")) {
            this.bugClose = false;
        }
        else
            this.bugClose = true;
    }
    checkBugExportPDF() {
        if (this.permissions.includes("BUG_EXPORT_PDF")) {
            this.bugExportPDF = false;
        }
        else
            this.bugExportPDF = true;
    }
    checkIsMine() {
        if (this.permissions.includes("IS_MINE")) {
            this.isMine = false;
        }
        else
            this.isMine = true;
    }
    logout() {
        this.authService.logout();
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _role_services_permission_service__WEBPACK_IMPORTED_MODULE_4__["PermissionService"],
        _login_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/error/error.module.ts":
/*!***************************************!*\
  !*** ./src/app/error/error.module.ts ***!
  \***************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _routing_error_routing_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing-error/routing-error.component */ "./src/app/error/routing-error/routing-error.component.ts");




let ErrorModule = class ErrorModule {
};
ErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _routing_error_routing_error_component__WEBPACK_IMPORTED_MODULE_3__["RoutingErrorComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _routing_error_routing_error_component__WEBPACK_IMPORTED_MODULE_3__["RoutingErrorComponent"]
        ]
    })
], ErrorModule);



/***/ }),

/***/ "./src/app/error/routing-error/routing-error.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/error/routing-error/routing-error.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL3JvdXRpbmctZXJyb3Ivcm91dGluZy1lcnJvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/error/routing-error/routing-error.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/error/routing-error/routing-error.component.ts ***!
  \****************************************************************/
/*! exports provided: RoutingErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingErrorComponent", function() { return RoutingErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RoutingErrorComponent = class RoutingErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        document.getElementById("errorMessage").innerHTML = "Thats not cute or something went terribly wrong(maybe permissions)";
        setTimeout(() => {
            this.router.navigateByUrl("/login");
        }, 4000);
    }
};
RoutingErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-routing-error',
        template: __webpack_require__(/*! raw-loader!./routing-error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/routing-error/routing-error.component.html"),
        styles: [__webpack_require__(/*! ./routing-error.component.css */ "./src/app/error/routing-error/routing-error.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RoutingErrorComponent);



/***/ }),

/***/ "./src/app/guards/logged-in.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/logged-in.guard.ts ***!
  \*******************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _role_services_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../role/services/permission.service */ "./src/app/role/services/permission.service.ts");




let LoggedInGuard = class LoggedInGuard {
    constructor(router, permissionService) {
        //todo Depending on how the session is created, here you should extract permissions from active user
        //     //todo After that, this Guard should be set in app-routing.module.ts
        //this.permissions = this.permissionService.getPermissionsForCurrentUser();
        this.router = router;
        this.permissionService = permissionService;
    }
    /**
  
     * Check if we have a valid auth token
  
     * @param next
  
     * @param state
  
     */
    canActivate(next, state) {
        //ToDo if authService.isLoggedIn && hasRoles(user)
        if (localStorage.getItem('auth_token') !== null)
            return true;
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _role_services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"]])
], LoggedInGuard);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  max-width: 400px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.service */ "./src/app/login/services/login.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.user = {};
    }
    ngOnInit() {
        this.submitted = false;
        this.authService.logout();
    }
    onSubmit(form) {
        this.user.username = form.value.username;
        this.user.password = form.value.password;
        this.authService.login(this.user).subscribe(result => {
            localStorage.setItem('auth_token', result.token);
            this.router.navigate(['/dashboard']);
            console.log(result);
        }, error => {
            alert(error.error.message);
        });
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/login/services/login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/login/services/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/services/backend.service */ "./src/app/user/services/backend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginService = class LoginService {
    constructor(backendService, router) {
        this.backendService = backendService;
        this.router = router;
        this.loggedIn = false;
    }
    login(user) {
        return this.backendService.post('http://localhost:8080/jbugs/login/auth', user);
        //this.loggedIn = true;
    }
    logout() {
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
    }
};
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginService);



/***/ }),

/***/ "./src/app/role/customs/permissions-dialog/permissions-dialog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/role/customs/permissions-dialog/permissions-dialog.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGUvY3VzdG9tcy9wZXJtaXNzaW9ucy1kaWFsb2cvcGVybWlzc2lvbnMtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/role/customs/permissions-dialog/permissions-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/role/customs/permissions-dialog/permissions-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PermissionsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsDialogComponent", function() { return PermissionsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_permission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/permission.service */ "./src/app/role/services/permission.service.ts");




let PermissionsDialogComponent = class PermissionsDialogComponent {
    constructor(dialogRef, data, permissionService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.permissionService = permissionService;
        this.isSelected = false;
        this.validForm = false;
        this.permissionList = [];
        this.rolePermissions = [];
        this.permissionsCheck = [];
        this.columnDefs = [
            { headerName: 'Type', field: 'type', sortable: true, filter: true },
            { headerName: 'Description', field: 'description', sortable: true, filter: true }
        ];
        this.isSelected = false;
        this.validForm = false;
        this.deselectPermissions();
        this.permissionList = data.permissions;
        this.rowSelection = "single";
    }
    get selectedOptions() {
        return this.permissionsCheck
            .filter(opt => opt.checked)
            .map(opt => opt.type);
    }
    ngOnInit() {
        this.permissionService.getPermissions().subscribe(result => {
            this.permissionList = result;
            for (let r of result) {
                this.permissionsCheck.push({
                    type: r.type,
                    description: r.description,
                    checked: false
                });
            }
        });
        this.permissionService.getRolePermissions(this.data.type).subscribe(result => {
            this.rolePermissions = result;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    setSelected() {
        this.isSelected = true;
        this.deselectPermissions();
        if (this.rolePermissions.length < 2) {
            this.isSelected = false;
        }
    }
    deselectPermissions() {
        for (let p of this.permissionsCheck) {
            p.checked = false;
        }
        this.validForm = false;
    }
    deletePermission() {
        let permission = this.gridApi.getSelectedRows()[0];
        if (this.rolePermissions.length > 1) {
            const index = this.rolePermissions.indexOf(permission);
            if (index !== -1) {
                this.rolePermissions.splice(index, 1);
            }
        }
        this.refreshTable();
    }
    savePermission() {
        for (let perm of this.selectedOptions) {
            if (this.rolePermissions.map(x => x.type).includes(perm)) {
                console.log(perm + " already exists");
            }
            else {
                let permission = this.getPerm(perm);
                this.rolePermissions.push(permission);
            }
        }
        this.refreshTable();
    }
    getPerm(perm) {
        for (let p of this.permissionList) {
            if (p.type === perm) {
                return p;
            }
        }
    }
    validateForm() {
        if (this.selectedOptions.length !== 0) {
            this.validForm = true;
        }
        else {
            this.validForm = false;
        }
    }
    close() {
        this.dialogRef.close();
    }
    save() {
        this.dialogRef.close({
            type: this.data.type,
            permissions: this.rolePermissions.map(x => x.type)
        });
    }
    refreshTable() {
        this.gridApi.setRowData(this.rolePermissions);
        this.isSelected = false;
        this.deselectPermissions();
        this.validForm = false;
    }
};
PermissionsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permissions-dialog',
        template: __webpack_require__(/*! raw-loader!./permissions-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/role/customs/permissions-dialog/permissions-dialog.component.html"),
        styles: [__webpack_require__(/*! ./permissions-dialog.component.css */ "./src/app/role/customs/permissions-dialog/permissions-dialog.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_permission_service__WEBPACK_IMPORTED_MODULE_3__["PermissionService"]])
], PermissionsDialogComponent);



/***/ }),

/***/ "./src/app/role/customs/roles-cell/roles-cell.component.css":
/*!******************************************************************!*\
  !*** ./src/app/role/customs/roles-cell/roles-cell.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.mat-button{\r\n  padding: 3px 3px !important;\r\n  min-width: 24px;\r\n  line-height: 24px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9jdXN0b21zL3JvbGVzLWNlbGwvcm9sZXMtY2VsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yb2xlL2N1c3RvbXMvcm9sZXMtY2VsbC9yb2xlcy1jZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ubWF0LWJ1dHRvbntcclxuICBwYWRkaW5nOiAzcHggM3B4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/role/customs/roles-cell/roles-cell.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/role/customs/roles-cell/roles-cell.component.ts ***!
  \*****************************************************************/
/*! exports provided: RolesCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesCellComponent", function() { return RolesCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../permissions-dialog/permissions-dialog.component */ "./src/app/role/customs/permissions-dialog/permissions-dialog.component.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/role.service */ "./src/app/role/services/role.service.ts");





let RolesCellComponent = class RolesCellComponent {
    constructor(dialog, roleService) {
        this.dialog = dialog;
        this.roleService = roleService;
    }
    agInit(params) {
        this.rowData = params.data;
    }
    ngOnInit() {
    }
    writeSome() {
        console.log("RowData : " + this.rowData.type + " " + this.rowData.permissions);
    }
    openDialog() {
        let dialogRef = this.dialog.open(_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PermissionsDialogComponent"], {
            data: this.rowData,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.roleService.savePermission(result).subscribe(data => {
                    console.log("SavePermission result: " + data.type);
                });
            }
        });
    }
};
RolesCellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-cell',
        template: __webpack_require__(/*! raw-loader!./roles-cell.component.html */ "./node_modules/raw-loader/index.js!./src/app/role/customs/roles-cell/roles-cell.component.html"),
        styles: [__webpack_require__(/*! ./roles-cell.component.css */ "./src/app/role/customs/roles-cell/roles-cell.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]])
], RolesCellComponent);



/***/ }),

/***/ "./src/app/role/role.module.ts":
/*!*************************************!*\
  !*** ./src/app/role/role.module.ts ***!
  \*************************************/
/*! exports provided: RoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleModule", function() { return RoleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/role/roles/roles.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







let RoleModule = class RoleModule {
};
RoleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_roles_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"]
        ],
        exports: [
            _roles_roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"]
        ]
    })
], RoleModule);



/***/ }),

/***/ "./src/app/role/roles/roles.component.css":
/*!************************************************!*\
  !*** ./src/app/role/roles/roles.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".float-left { width: 25%; float: left; }\r\n.float-right {width: 70%; float: right; }\r\nbutton{\r\n  padding: 24px 24px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9yb2xlcy9yb2xlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUN2QyxjQUFjLFVBQVUsRUFBRSxZQUFZLEVBQUU7QUFFeEM7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXQtbGVmdCB7IHdpZHRoOiAyNSU7IGZsb2F0OiBsZWZ0OyB9XHJcbi5mbG9hdC1yaWdodCB7d2lkdGg6IDcwJTsgZmxvYXQ6IHJpZ2h0OyB9XHJcblxyXG5idXR0b257XHJcbiAgcGFkZGluZzogMjRweCAyNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/role/roles/roles.component.ts":
/*!***********************************************!*\
  !*** ./src/app/role/roles/roles.component.ts ***!
  \***********************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/role.service */ "./src/app/role/services/role.service.ts");
/* harmony import */ var _customs_roles_cell_roles_cell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customs/roles-cell/roles-cell.component */ "./src/app/role/customs/roles-cell/roles-cell.component.ts");




let RolesComponent = class RolesComponent {
    constructor(roleService) {
        this.roleService = roleService;
        this.columnDefs = [
            { headerName: 'Type', field: 'type', sortable: true, filter: true, width: 200, cellClass: "cell-wrap-text" },
            { width: 60, cellRendererFramework: _customs_roles_cell_roles_cell_component__WEBPACK_IMPORTED_MODULE_3__["RolesCellComponent"] }
        ];
    }
    ngOnInit() {
        this.roleService.getRoles()
            .subscribe((data) => {
            this.roleList = data;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
};
RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-list',
        template: __webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/index.js!./src/app/role/roles/roles.component.html"),
        styles: [__webpack_require__(/*! ./roles.component.css */ "./src/app/role/roles/roles.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"]])
], RolesComponent);



/***/ }),

/***/ "./src/app/role/services/permission.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/role/services/permission.service.ts ***!
  \*****************************************************/
/*! exports provided: PermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionService", function() { return PermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/services/backend.service */ "./src/app/user/services/backend.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);




let PermissionService = class PermissionService {
    constructor(backendService) {
        this.backendService = backendService;
        this.baseUrl = 'http://localhost:8080/jbugs/jbugs-api';
    }
    getPermissions() {
        return this.backendService.get(this.baseUrl + '/permissions');
    }
    getUserPermissions(username) {
        return this.backendService.post(this.baseUrl + '/permissions/userPermissions', {
            'username': username
        });
    }
    getRolePermissions(type) {
        return this.backendService.post(this.baseUrl + '/permissions/rolePermissions', {
            'type': type
        });
    }
    decode(token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
        }
        catch (e) {
            return null;
        }
    }
    getPermissionsForCurrentUser() {
        let token = localStorage.getItem('auth_token');
        return this.decode(token).permissions;
    }
    getToken() {
        return localStorage.getItem('auth_token');
    }
    getUsername() {
        let token = localStorage.getItem('auth_token');
        return this.decode(token).username;
    }
};
PermissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
], PermissionService);



/***/ }),

/***/ "./src/app/role/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/role/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/services/backend.service */ "./src/app/user/services/backend.service.ts");



let RoleService = class RoleService {
    constructor(backendService) {
        this.backendService = backendService;
        this.baseUrl = 'http://localhost:8080/jbugs/jbugs-api';
    }
    getRoles() {
        return this.backendService.get(this.baseUrl + '/roles');
    }
    getRole(roleType) {
        return this.backendService.post(this.baseUrl + '/roles/role', roleType);
    }
    savePermission(role) {
        if (role)
            return this.backendService.post(this.baseUrl + '/roles/save', role);
    }
};
RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
], RoleService);



/***/ }),

/***/ "./src/app/services/add-header.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/add-header.service.ts ***!
  \************************************************/
/*! exports provided: AddHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeader", function() { return AddHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _role_services_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../role/services/permission.service */ "./src/app/role/services/permission.service.ts");



let AddHeader = class AddHeader {
    constructor(permissionService) {
        this.permissionService = permissionService;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${this.permissionService.getToken()}`
            }
        });
        //request.headers.append('Authorization' , `Bearer ${this.permissionService.getToken()}`);
        return next.handle(request);
    }
};
AddHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_role_services_permission_service__WEBPACK_IMPORTED_MODULE_2__["PermissionService"]])
], AddHeader);



/***/ }),

/***/ "./src/app/summary.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/summary.pipe.ts ***!
  \*********************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SummaryPipe = class SummaryPipe {
    transform(value, ...args) {
        if (!value)
            return null;
        return value.substr(0, 50) + '....';
    }
};
SummaryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'summary'
    })
], SummaryPipe);



/***/ }),

/***/ "./src/app/user/customs/user-details/user-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/user/customs/user-details/user-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY3VzdG9tcy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/customs/user-details/user-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/customs/user-details/user-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/user/services/user.service.ts");




let UserDetailsComponent = class UserDetailsComponent {
    constructor(dialogRef, data, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.deactivateButton = false;
        this.activateButton = false;
    }
    ngOnInit() {
        this.userService.getUserData(this.data.username).subscribe(data => {
            console.log(data);
            this.user = data;
        }, error => {
            console.log(error);
        }, () => {
            this.checkButtons();
        });
    }
    checkButtons() {
        if (this.user.counter >= 5) {
            this.activateButton = true;
        }
        if (this.user.counter < 5 && !this.user.hasTasks) {
            this.deactivateButton = true;
        }
    }
    activate() {
        this.userService.activateOrResetUser(this.user.username).subscribe(data => {
            console.log(data);
        }, error1 => console.log(error1), () => this.dialogRef.close({
            'message': 'ACTIVATED'
        }));
    }
    deactivate() {
        this.userService.deactivateUser(this.user.username).subscribe(data => {
            console.log(data);
        }, error1 => console.log(error1), () => this.dialogRef.close({
            'message': 'DEACTIVATED'
        }));
    }
    close() {
        this.dialogRef.close();
    }
};
UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-details',
        template: __webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/customs/user-details/user-details.component.html"),
        styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user/customs/user-details/user-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/user/customs/users-cell/users-cell.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/customs/users-cell/users-cell.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.mat-button{\r\n  padding: 3px 3px !important;\r\n  min-width: 24px;\r\n  line-height: 24px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jdXN0b21zL3VzZXJzLWNlbGwvdXNlcnMtY2VsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2N1c3RvbXMvdXNlcnMtY2VsbC91c2Vycy1jZWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ubWF0LWJ1dHRvbntcclxuICBwYWRkaW5nOiAzcHggM3B4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/customs/users-cell/users-cell.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/customs/users-cell/users-cell.component.ts ***!
  \*****************************************************************/
/*! exports provided: UsersCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersCellComponent", function() { return UsersCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-details/user-details.component */ "./src/app/user/customs/user-details/user-details.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let UsersCellComponent = class UsersCellComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    agInit(params) {
        this.rowData = params.data;
    }
    ngOnInit() {
    }
    onEdit() {
        this.router.navigate(["dashboard/users/edit", this.rowData.username]);
    }
    onDetail() {
        let dialogRef = this.dialog.open(_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"], {
            data: this.rowData,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result)
                console.log(result.message);
        });
    }
};
UsersCellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-cell',
        template: __webpack_require__(/*! raw-loader!./users-cell.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/customs/users-cell/users-cell.component.html"),
        styles: [__webpack_require__(/*! ./users-cell.component.css */ "./src/app/user/customs/users-cell/users-cell.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], UsersCellComponent);



/***/ }),

/***/ "./src/app/user/directives/jumper.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/directives/jumper.directive.ts ***!
  \*****************************************************/
/*! exports provided: JumperDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumperDirective", function() { return JumperDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JumperDirective = class JumperDirective {
    constructor(el) {
        this.el = el;
        this.position = 'left';
    }
    onMouseEnter() {
        this.togglePosition();
    }
    togglePosition() {
        if (this.position === 'left') {
            this.el.nativeElement.style.float = 'left';
            this.position = 'right';
        }
        else {
            this.el.nativeElement.style.float = 'right';
            this.position = 'left';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], JumperDirective.prototype, "onMouseEnter", null);
JumperDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appJumper]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], JumperDirective);



/***/ }),

/***/ "./src/app/user/directives/rbtn.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/user/directives/rbtn.directive.ts ***!
  \***************************************************/
/*! exports provided: RbtnDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RbtnDirective", function() { return RbtnDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RbtnDirective = class RbtnDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        // if (this.role.includes(Role.DELETE_BUG))
        //   this.el.nativeElement.disabled = true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], RbtnDirective.prototype, "role", void 0);
RbtnDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appRbtn]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], RbtnDirective);



/***/ }),

/***/ "./src/app/user/services/backend.service.ts":
/*!**************************************************!*\
  !*** ./src/app/user/services/backend.service.ts ***!
  \**************************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



/**
 * Base backend service. Business services should import this instead of using HttpClient directly.
 */
let BackendService = class BackendService {
    constructor(http) {
        this.http = http;
    }
    /**
     *
     * @param url URL to call
     * @param params optional parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    get(url, params) {
        return this.invoke('GET', url, null, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    put(url, data, params) {
        return this.invoke('PUT', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    patch(url, data, params) {
        return this.invoke('PATCH', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    post(url, data, params) {
        return this.invoke('POST', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    delete(url, params) {
        return this.invoke('DELETE', url, null, params);
    }
    invoke(method, url, data = {}, params) {
        const options = {
            body: data,
            params,
            headers: {
                'Accept-Language': 'en',
            }
        };
        if (!url) {
            throw new Error('No URL provided.');
        }
        const requestUrl = `${url}`;
        return this.http.request(method, requestUrl, options);
    }
};
BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BackendService);



/***/ }),

/***/ "./src/app/user/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ "./src/app/user/services/backend.service.ts");



let UserService = class UserService {
    constructor(backendService) {
        this.backendService = backendService;
        this.baseUrl = "http://localhost:8080/jbugs/jbugs-api";
    }
    getAllUsers() {
        return this.backendService.get(this.baseUrl + '/users');
    }
    updateUser(user) {
        return this.backendService.put(this.baseUrl + '/users', user);
    }
    addUser(user) {
        return this.backendService.post(this.baseUrl + '/users', user);
    }
    getUser(userName) {
        var urlGet;
        urlGet = this.baseUrl + '/users/getUser/' + userName;
        return this.backendService.get(urlGet);
    }
    getUserWithId(userId) {
        return this.backendService.get(this.baseUrl + '/users/' + userId);
    }
    activateOrResetUser(username) {
        return this.backendService.put(this.baseUrl + '/users/activate', {
            'username': username
        });
    }
    deactivateUser(username) {
        return this.backendService.put(this.baseUrl + '/users/deactivate', {
            'username': username
        });
    }
    getUserData(username) {
        return this.backendService.get(this.baseUrl + '/users/getUserData/' + username);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
], UserService);



/***/ }),

/***/ "./src/app/user/user-add/user-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-invalid.ng-touched {\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWFkZC91c2VyLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWFkZC91c2VyLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-add/user-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.ts ***!
  \*****************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserAddComponent = class UserAddComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userNew = {};
        this.roles = [
            { name: 'ADMINISTRATOR', value: '1', checked: false },
            { name: 'PROJECT MANAGER', value: '2', checked: false },
            { name: 'TEST MANAGER', value: '3', checked: false },
            { name: 'DEVELOPER', value: '4', checked: false },
            { name: 'TESTER', value: '5', checked: false }
        ];
        this.validForm = false;
    }
    get selectedOptions() {
        return this.roles
            .filter(opt => opt.checked)
            .map(opt => opt.name);
    }
    ngOnInit() {
    }
    addUser(form) {
        this.userNew.firstName = form.value.firstName;
        this.userNew.lastName = form.value.lastName;
        this.userNew.email = form.value.email;
        this.userNew.mobileNumber = form.value.mobileNumber;
        this.userNew.roles = this.selectedOptions;
        this.userService.addUser(this.userNew).subscribe(result => {
            if (result.messageCode) {
                alert("Error while creating user: " + result.message);
            }
            else {
                alert("User with username: " + result.firstName + " was successfully created!");
            }
        });
        this.router.navigate(['/dashboard/users']);
    }
    validateForm() {
        if (this.selectedOptions.length !== 0) {
            this.validForm = true;
        }
        else {
            this.validForm = false;
        }
    }
};
UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-add',
        template: __webpack_require__(/*! raw-loader!./user-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-add/user-add.component.html"),
        styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/user/user-add/user-add.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], UserAddComponent);



/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-invalid.ng-touched {\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");




let UserEditComponent = class UserEditComponent {
    constructor(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.user = {};
        this.roles = [
            { name: 'ADMINISTRATOR', value: '1', checked: false },
            { name: 'PROJECT MANAGER', value: '2', checked: false },
            { name: 'TEST MANAGER', value: '3', checked: false },
            { name: 'DEVELOPER', value: '4', checked: false },
            { name: 'TESTER', value: '5', checked: false /*this.isChecked()*/ }
        ];
        this.validForm = false;
        console.log(this.user.roles);
    }
    isChecked() {
        console.log(this.user.roles);
        return true;
    }
    get selectedOptions() {
        return this.roles
            .filter(opt => opt.checked)
            .map(opt => opt.name);
    }
    submit(form) {
        console.log(this.user.roles);
        this.user.firstName = form.value.firstName;
        this.user.lastName = form.value.lastName;
        this.user.email = form.value.email;
        this.user.mobileNumber = form.value.mobileNumber;
        alert(this.user.roles);
        //only for test
        //todo remove this line
        //this.userService.updateUser(this.user);
        this.user.roles = this.selectedOptions;
        this.userService.updateUser(this.user).subscribe(result => alert("User with username: " + result.username + " updated successfully"), error => {
            console.log(error);
            alert("Error during Update...");
        });
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.username = params.get('userName');
        });
        this.userService.getUser(this.username).subscribe((user) => {
            this.user = user;
            for (let i = 0; i < this.user.roles.length; i++) {
                this.roles.forEach((role) => {
                    this.setRole(this.user.roles[i], role);
                });
            }
        });
        console.log(this.user.roles);
        //this.user.mobileNumber = "0040666666"
        //console.log(this.user.mobileNumber);
        //this.user = this.userComponent.currentUser;
        console.log("currentUser get from ...:");
        /* this.sub = this. activatedRoute.params.subscribe(params => {
           this.id = +params['id'];*/
        //console.log(this.userComponent.currentUser.email);
        /* });*/
        console.log(this.user.roles);
    }
    setRole(role, userRole) {
        if (role == userRole.name) {
            userRole.checked = true;
        }
    }
    validateForm() {
        if (this.selectedOptions.length !== 0) {
            this.validForm = true;
        }
        else {
            this.validForm = false;
        }
    }
};
UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: __webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-edit/user-edit.component.html"),
        styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/user/user-edit/user-edit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], UserEditComponent);



/***/ }),

/***/ "./src/app/user/user-management/user-management.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/user-management/user-management.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-invalid.ng-touched {\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user-management/user-management.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/user-management/user-management.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserManagementComponent = class UserManagementComponent {
    constructor() {
        this.category = [
            {
                id: 1,
                name: 'Science'
            },
            {
                id: 2,
                name: 'Phylosophy'
            }
        ];
        this.text1 = 'asdasdasdasdasdasdasdasdasda';
        this.text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus. Ac orci phasellus egestas tellus. Scelerisque purus semper eget duis at tellus. Consectetur a erat nam at lectus urna duis. Potenti nullam ac tortor vitae. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Vel eros donec ac odio tempor orci. Tristique magna sit amet purus gravida. Arcu risus quis varius quam quisque. Convallis convallis tellus id interdum velit laoreet id donec. Tellus molestie nunc non blandit massa.\n' +
            '\n' +
            'Quis vel eros donec ac. Velit scelerisque in dictum non consectetur a erat nam at. Nunc sed augue lacus viverra vitae congue eu consequat ac. Facilisis mauris sit amet massa. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Leo vel orci porta non pulvinar. Mi quis hendrerit dolor magna. Quis blandit turpis cursus in hac habitasse. Libero id faucibus nisl tincidunt. Nisi quis eleifend quam adipiscing vitae proin sagittis. Odio morbi quis commodo odio aenean sed adipiscing. Etiam sit amet nisl purus in mollis nunc sed. Ac turpis egestas integer eget aliquet nibh praesent.';
    }
    ngOnInit() {
    }
    log(x) {
        console.log(x);
    }
    submit(form) {
        console.log(form);
    }
};
UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: __webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user-management/user-management.component.html"),
        styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/user/user-management/user-management.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserManagementComponent);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _directives_jumper_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/jumper.directive */ "./src/app/user/directives/jumper.directive.ts");
/* harmony import */ var _directives_rbtn_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/rbtn.directive */ "./src/app/user/directives/rbtn.directive.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/backend.service */ "./src/app/user/services/backend.service.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
            _directives_jumper_directive__WEBPACK_IMPORTED_MODULE_4__["JumperDirective"],
            _directives_rbtn_directive__WEBPACK_IMPORTED_MODULE_5__["RbtnDirective"]
        ],
        providers: [
            _services_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_7__["AgGridModule"].withComponents([]),
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]
        ],
        exports: [
            _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
            _directives_jumper_directive__WEBPACK_IMPORTED_MODULE_4__["JumperDirective"],
            _directives_rbtn_directive__WEBPACK_IMPORTED_MODULE_5__["RbtnDirective"]
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/app/user/users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/user/users/users.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n  text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customs_users_cell_users_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customs/users-cell/users-cell.component */ "./src/app/user/customs/users-cell/users-cell.component.ts");





let UsersComponent = class UsersComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.columnDefs = [
            { headerName: 'Firstname', field: 'firstName', sortable: true, filter: true, width: 100, cellClass: "cell-wrap-text" },
            { headerName: 'Lastname', field: 'lastName', sortable: true, filter: true, width: 120, cellClass: "cell-wrap-text" },
            { headerName: 'Email', field: 'email', sortable: true, filter: true, width: 180, cellClass: "cell-wrap-text" },
            { headerName: 'Mobile', field: 'mobileNumber', sortable: true, filter: true, width: 150, cellClass: "cell-wrap-text" },
            { headerName: 'Username', field: 'username', sortable: true, filter: true, width: 100, cellClass: "cell-wrap-text" },
            { width: 110, cellRendererFramework: _customs_users_cell_users_cell_component__WEBPACK_IMPORTED_MODULE_4__["UsersCellComponent"] }
        ];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.userService.getAllUsers()
            .subscribe((userList) => {
            this.userList = userList;
            console.log(userList);
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onSelectionChanged() {
        let selectedRows = this.gridApi.getSelectedRows();
        let router = this.router;
        let selectedRowsString = "";
        selectedRows.forEach(function (selectedRow, index) {
            if (index !== 0) {
                selectedRowsString += ", ";
            }
            selectedRowsString += selectedRow.firstName;
            document.getElementById('selectedRow').innerText = selectedRowsString;
            alert(selectedRow.username);
            router.navigate(["dashboard/users/edit", selectedRow.username]);
        });
    }
};
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/users/users.component.html"),
        styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/user/users/users.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], UsersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\schulcj01\IdeaProjects\jbugs-new\jbugs-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map