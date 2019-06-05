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

module.exports = "<button (click)=\"openCreateDialog()\">Add a new bug</button>\r\n<h3>bugs</h3>\r\n<!--<div>-->\r\n<!--  <li *ngFor=\"let bug of bugList\"> {{bug.title}},{{bug.description}},{{bug.severity}}-->\r\n\r\n<!--</div>-->\r\n\r\n<div class=\"test-header\">Selection: <span id=\"selectedRow\"></span></div>\r\n<ag-grid-angular\r\n  id=\"myGrid\"\r\n  style=\"width: 1062px; height: 500px;\"\r\n  class=\"ag-theme-balham\"\r\n  [rowData]=\"bugList\"\r\n  [columnDefs]=\"columnDefs\"\r\n  [rowSelection]=\"rowSelection\"\r\n  rowHeight=\"33\"\r\n  (selectionChanged)=\"onSelectionChanged()\"\r\n  (gridReady)=\"onGridReady($event)\"\r\n>\r\n</ag-grid-angular>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

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

module.exports = "<ag-grid-angular\r\n  #myGrid\r\n  id=\"myGrid\"\r\n  style=\"width:300px;height: auto\"\r\n  class=\"ag-theme-balham-dark shadow p-3 mb-5 bg-dark rounded\"\r\n  [rowData]=\"roleList\"\r\n  [columnDefs]=\"columnDefs\"\r\n  [rowSelection]=\"false\"\r\n  [animateRows]=\"true\"\r\n  rowHeight=\"33\"\r\n  domLayout=\"print\"\r\n  (gridReady)=\"onGridReady($event)\"\r\n>\r\n</ag-grid-angular>\r\n"

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
/* harmony import */ var _bug_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bug/bugs/bugs.component */ "./src/app/bug/bugs/bugs.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-add/user-add.component */ "./src/app/user/user-add/user-add.component.ts");
/* harmony import */ var _role_role_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role/role.module */ "./src/app/role/role.module.ts");
/* harmony import */ var _error_error_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error/error.module */ "./src/app/error/error.module.ts");
/* harmony import */ var _services_add_header_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/add-header.service */ "./src/app/services/add-header.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _role_customs_roles_cell_roles_cell_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./role/customs/roles-cell/roles-cell.component */ "./src/app/role/customs/roles-cell/roles-cell.component.ts");
/* harmony import */ var _role_customs_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./role/customs/permissions-dialog/permissions-dialog.component */ "./src/app/role/customs/permissions-dialog/permissions-dialog.component.ts");
/* harmony import */ var _user_customs_users_cell_users_cell_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/customs/users-cell/users-cell.component */ "./src/app/user/customs/users-cell/users-cell.component.ts");
/* harmony import */ var _user_customs_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/customs/user-details/user-details.component */ "./src/app/user/customs/user-details/user-details.component.ts");
/* harmony import */ var _bug_customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bug/customs/bugs-cell/bugs-cell.component */ "./src/app/bug/customs/bugs-cell/bugs-cell.component.ts");
/* harmony import */ var _bug_customs_bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bug/customs/bug-edit/bug-edit.component */ "./src/app/bug/customs/bug-edit/bug-edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bug_bug_dialog_bug_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./bug/bug-dialog/bug-dialog.component */ "./src/app/bug/bug-dialog/bug-dialog.component.ts");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _user_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__["UserManagementComponent"],
            _summary_pipe__WEBPACK_IMPORTED_MODULE_9__["SummaryPipe"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _bug_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_12__["BugsComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
            _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_15__["UserAddComponent"],
            _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserEditComponent"],
            _role_customs_roles_cell_roles_cell_component__WEBPACK_IMPORTED_MODULE_22__["RolesCellComponent"],
            _role_customs_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_23__["PermissionsDialogComponent"],
            _bug_bug_dialog_bug_dialog_component__WEBPACK_IMPORTED_MODULE_29__["BugDialogComponent"],
            _role_customs_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_23__["PermissionsDialogComponent"],
            _user_customs_users_cell_users_cell_component__WEBPACK_IMPORTED_MODULE_24__["UsersCellComponent"],
            _user_customs_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_25__["UserDetailsComponent"],
            _bug_customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_26__["BugsCellComponent"],
            _bug_customs_bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_27__["BugEditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_14__["AgGridModule"].withComponents([]),
            _role_role_module__WEBPACK_IMPORTED_MODULE_16__["RoleModule"],
            _error_error_module__WEBPACK_IMPORTED_MODULE_17__["ErrorModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: _services_add_header_service__WEBPACK_IMPORTED_MODULE_18__["AddHeader"],
                multi: true
            }
        ],
        entryComponents: [
            _role_customs_roles_cell_roles_cell_component__WEBPACK_IMPORTED_MODULE_22__["RolesCellComponent"],
            _role_customs_permissions_dialog_permissions_dialog_component__WEBPACK_IMPORTED_MODULE_23__["PermissionsDialogComponent"],
            _user_customs_users_cell_users_cell_component__WEBPACK_IMPORTED_MODULE_24__["UsersCellComponent"],
            _user_customs_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_25__["UserDetailsComponent"],
            _bug_customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_26__["BugsCellComponent"],
            _bug_customs_bug_edit_bug_edit_component__WEBPACK_IMPORTED_MODULE_27__["BugEditComponent"],
            _bug_bug_dialog_bug_dialog_component__WEBPACK_IMPORTED_MODULE_29__["BugDialogComponent"]
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

/***/ "./src/app/bug/bugs/bugs.component.css":
/*!*********************************************!*\
  !*** ./src/app/bug/bugs/bugs.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1Zy9idWdzL2J1Z3MuY29tcG9uZW50LmNzcyJ9 */"

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
/* harmony import */ var _customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customs/bugs-cell/bugs-cell.component */ "./src/app/bug/customs/bugs-cell/bugs-cell.component.ts");






let BugsComponent = class BugsComponent {
    constructor(dialog, bugService) {
        this.dialog = dialog;
        this.bugService = bugService;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columnDefs = [
            { headerName: 'Title', field: 'title', sortable: true, filter: true, width: 100 },
            { headerName: 'Description', field: 'description', sortable: true, filter: true, width: 200, cellClass: "cell-wrap-text" },
            { headerName: 'Version', field: 'version', sortable: true, filter: true, width: 100 },
            { headerName: 'Date', field: 'date', sortable: true, filter: true, width: 200 },
            { headerName: 'Status', field: 'status', sortable: true, filter: true, width: 100 },
            { headerName: 'Fixed Version', field: 'fixedVersion', sortable: true, filter: true, width: 150 },
            { headerName: 'Severity', field: 'severity', sortable: true, filter: true, width: 100 },
            { width: 110, cellRendererFramework: _customs_bugs_cell_bugs_cell_component__WEBPACK_IMPORTED_MODULE_5__["BugsCellComponent"] }
            //   {headerName: 'Created by', field: 'createdByUser',sortable:true,filter:true},
            //   {headerName: 'Assigned to', field: 'assignedTo',sortable:true,filter:true},
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _services_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"]])
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
                this.bugservice.updateBug(result.data);
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
};
BugService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
], BugService);



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
        this.router = router;
        this.permissionService = permissionService;
        //todo Depending on how the session is created, here you should extract permissions from active user
        //     //todo After that, this Guard should be set in app-routing.module.ts
        this.permissions = this.permissionService.getPermissionsForCurrentUser();
    }
    /**
  
     * Check if we have a valid auth token
  
     * @param next
  
     * @param state
  
     */
    canActivate(next, state) {
        //ToDo if authService.isLoggedIn && hasRoles(user)
        // if (this.hasRoles()) {
        //       return true;
        // }
        // else{
        //   this.router.navigate(['/login']);
        //   return false;
        // }
        return true;
    }
    hasRoles() {
        if (this.permissions.length) {
            return true;
        }
        else {
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
        return this.backendService.post(this.baseUrl + '/permissions/userPermissions', { 'username': username
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
    getRolePermissions(type) {
        return this.backendService.post(this.baseUrl + '/permissions/rolePermissions', {
            'type': type
        });
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
                    this.setRole(this.roles[i], role);
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
        if (role == userRole) {
            role.checked = true;
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