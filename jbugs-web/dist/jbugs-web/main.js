(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bug_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bug/bugs/bugs.component */ "./src/app/bug/bugs/bugs.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _logged_in_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logged-in.guard */ "./src/app/logged-in.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user-add/user-add.component */ "./src/app/user/user-add/user-add.component.ts");










var routes = [
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
        canActivate: [_logged_in_guard__WEBPACK_IMPORTED_MODULE_7__["LoggedInGuard"]],
        children: [
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        component: _user_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
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
                component: _bug_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_3__["BugsComponent"]
            }
        ]
    },
    {
        path: ':user-add',
        component: _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_9__["UserAddComponent"]
    },
    {
        path: 'edit/:userName',
        component: _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\r\n\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\n\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\n\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDOztBQUV0QztFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5uYXYgYS5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--&lt;!&ndash;The content below is only a placeholder and can be replaced.&ndash;&gt;-->\r\n<!--<div style=\"text-align:left\">-->\r\n<!--  <h1>-->\r\n<!--    Welcome to {{ title2 }}!-->\r\n<!--  </h1>-->\r\n<!--&lt;!&ndash;  <app-user-list (output)=\"alertUserFromList($event)\"> </app-user-list>&ndash;&gt;-->\r\n<!--&lt;!&ndash;  <app-user (output)=\"alertUserFromList($event)\" [user]=\"user\" #userList> </app-user>&ndash;&gt;-->\r\n<!--&lt;!&ndash;  <button appJumper (click)=\"alertChild()\">Alert child component</button>&ndash;&gt;-->\r\n<!--&lt;!&ndash;  <app-user-management></app-user-management>&ndash;&gt;-->\r\n<!--</div>-->\r\n<!--<router-outlet></router-outlet>-->\r\n<!--<nav>-->\r\n<!--  <h1>-->\r\n<!--    <a routerLinkActive=\"active current\" routerLink=\"/users\">Users</a>-->\r\n<!--    <a routerLinkActive=\"active current\" routerLink=\"/bugs\">Bugs</a>-->\r\n<!--  </h1>-->\r\n<!--</nav>-->\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user-management/user-management.component */ "./src/app/user/user-management/user-management.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _summary_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./summary.pipe */ "./src/app/summary.pipe.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user-edit/user-edit.component */ "./src/app/user/user-edit/user-edit.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _bug_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bug/bugs/bugs.component */ "./src/app/bug/bugs/bugs.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user-add/user-add.component */ "./src/app/user/user-add/user-add.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _user_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_7__["UserManagementComponent"],
                _summary_pipe__WEBPACK_IMPORTED_MODULE_9__["SummaryPipe"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserEditComponent"],
                _user_users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                _bug_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_13__["BugsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_16__["UserAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"].withComponents([])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bug/bugs/bugs.component.css":
/*!*********************************************!*\
  !*** ./src/app/bug/bugs/bugs.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1Zy9idWdzL2J1Z3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bug/bugs/bugs.component.html":
/*!**********************************************!*\
  !*** ./src/app/bug/bugs/bugs.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>bugs</h3>\r\n<!--<div>-->\r\n<!--  <li *ngFor=\"let bug of bugList\"> {{bug.title}},{{bug.description}},{{bug.severity}}-->\r\n\r\n<!--</div>-->\r\n\r\n\r\n<ag-grid-angular\r\n  id=\"myGrid\"\r\n  style=\"width: 1500px; height: 1500px;\"\r\n  class=\"ag-theme-balham\"\r\n  [rowData]=\"bugList\"\r\n  [columnDefs]=\"columnDefs\"\r\n\r\n  (rowClicked)='onRowClicked($event)'\r\n>\r\n</ag-grid-angular>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bug_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bug.service */ "./src/app/bug/services/bug.service.ts");



var BugsComponent = /** @class */ (function () {
    function BugsComponent(bugService) {
        this.bugService = bugService;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columnDefs = [
            { headerName: 'Title', field: 'title', sortable: true, filter: true },
            { headerName: 'Description', field: 'description', sortable: true, filter: true },
            { headerName: 'Version', field: 'version', sortable: true, filter: true },
            { headerName: 'Date', field: 'date', sortable: true, filter: true },
            { headerName: 'Status', field: 'status', sortable: true, filter: true },
            { headerName: 'Fixed Version', field: 'fixedVersion', sortable: true, filter: true },
            { headerName: 'Severity', field: 'severity', sortable: true, filter: true },
            { headerName: 'Created by', field: 'createdByUser', sortable: true, filter: true },
            { headerName: 'Assigned to', field: 'assignedTo', sortable: true, filter: true },
        ];
        this.rowSelection = "single";
    }
    BugsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("initialize bugList with backend stuff");
        this.bugService.getAllBugs()
            .subscribe(function (bugList) {
            _this.bugList = bugList;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BugsComponent.prototype, "output", void 0);
    BugsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bugs',
            template: __webpack_require__(/*! ./bugs.component.html */ "./src/app/bug/bugs/bugs.component.html"),
            styles: [__webpack_require__(/*! ./bugs.component.css */ "./src/app/bug/bugs/bugs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bug_service__WEBPACK_IMPORTED_MODULE_2__["BugService"]])
    ], BugsComponent);
    return BugsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
    }
    /**
     *
     * @param url URL to call
     * @param params optional parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.get = function (url, params) {
        return this.invoke('GET', url, null, params);
    };
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.put = function (url, data, params) {
        return this.invoke('PUT', url, data, params);
    };
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.patch = function (url, data, params) {
        return this.invoke('PATCH', url, data, params);
    };
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.post = function (url, data, params) {
        return this.invoke('POST', url, data, params);
    };
    /**
     *
     * @param url URL to call
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.delete = function (url, params) {
        return this.invoke('DELETE', url, null, params);
    };
    BackendService.prototype.invoke = function (method, url, data, params) {
        if (data === void 0) { data = {}; }
        var options = {
            body: data,
            params: params,
            headers: {
                'Accept-Language': 'en'
            }
        };
        if (!url) {
            throw new Error('No URL provided.');
        }
        var requestUrl = "" + url;
        return this.http.request(method, requestUrl, options);
    };
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ "./src/app/bug/services/backend.service.ts");



var BugService = /** @class */ (function () {
    function BugService(backendService) {
        this.backendService = backendService;
    }
    BugService.prototype.getAllBugs = function () {
        return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/bugs');
    };
    BugService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
    ], BugService);
    return BugService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n\r\n  font-size: 1.2em;\r\n\r\n  color: #999;\r\n\r\n  margin-bottom: 0;\r\n\r\n}\r\n\r\nh2 {\r\n\r\n  font-size: 2em;\r\n\r\n  margin-top: 0;\r\n\r\n  padding-top: 0;\r\n\r\n}\r\n\r\nnav a {\r\n\r\n  padding: 5px 10px;\r\n\r\n  text-decoration: none;\r\n\r\n  margin-top: 10px;\r\n\r\n  display: inline-block;\r\n\r\n  background-color: #eee;\r\n\r\n  border-radius: 4px;\r\n\r\n}\r\n\r\nnav a:visited, a:link {\r\n\r\n  color: #607d8b;\r\n\r\n}\r\n\r\nnav a:hover {\r\n\r\n  color: #039be5;\r\n\r\n  background-color: #cfd8dc;\r\n\r\n}\r\n\r\nnav a.active {\r\n\r\n  color: #039be5;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjs7RUFFaEIsV0FBVzs7RUFFWCxnQkFBZ0I7O0FBRWxCOztBQUVBOztFQUVFLGNBQWM7O0VBRWQsYUFBYTs7RUFFYixjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxpQkFBaUI7O0VBRWpCLHFCQUFxQjs7RUFFckIsZ0JBQWdCOztFQUVoQixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsa0JBQWtCOztBQUVwQjs7QUFFQTs7RUFFRSxjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxjQUFjOztFQUVkLHlCQUF5Qjs7QUFFM0I7O0FBRUE7O0VBRUUsY0FBYzs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcblxyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gIGNvbG9yOiAjOTk5O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxufVxyXG5cclxuaDIge1xyXG5cclxuICBmb250LXNpemU6IDJlbTtcclxuXHJcbiAgbWFyZ2luLXRvcDogMDtcclxuXHJcbiAgcGFkZGluZy10b3A6IDA7XHJcblxyXG59XHJcblxyXG5uYXYgYSB7XHJcblxyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxufVxyXG5cclxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcclxuXHJcbiAgY29sb3I6ICM2MDdkOGI7XHJcblxyXG59XHJcblxyXG5uYXYgYTpob3ZlciB7XHJcblxyXG4gIGNvbG9yOiAjMDM5YmU1O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG5cclxufVxyXG5cclxubmF2IGEuYWN0aXZlIHtcclxuXHJcbiAgY29sb3I6ICMwMzliZTU7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1 translate>Dashboard</h1></div>\r\n<nav>\r\n  <a routerLinkActive=\"active current\" routerLink=\"users\">Users</a>\r\n  <a routerLinkActive=\"active current\" routerLink=\"bugs\">Bugs</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/logged-in.guard.ts":
/*!************************************!*\
  !*** ./src/app/logged-in.guard.ts ***!
  \************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/services/user.service */ "./src/app/user/services/user.service.ts");



var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(userService) {
        this.userService = userService;
    }
    /**
  
     * Check if we have a valid auth token
  
     * @param next
  
     * @param state
  
     */
    LoggedInGuard.prototype.canActivate = function (next, state) {
        //ToDo if authService.isLoggedIn && hasRoles(user)
        //return this.userService.isLoggedIn();
        return true;
    };
    LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form='ngForm'>\r\n  <div class=\"form-group\">\r\n    <label for=\"firstName\"> FirstName </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"firstName\"\r\n           name=\"firstName\"\r\n           required\r\n           #firstName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">\r\n      <div *ngIf=\"firstName.errors.required\">The field is required</div>\r\n      <div *ngIf=\"firstName.errors.pattern\">The pattern is invalid.</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label> LastName </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"lastName\"\r\n           name=\"lastName\"\r\n           required\r\n           #lastName=\"ngModel\"\r\n           ngModel>\r\n    <div *ngIf=\"lastName.touched && lastName.invalid\" class=\"alert alert-danger\">Last name is required</div>\r\n  </div>\r\n\r\n  <button (click)=\"onSubmit(form)\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Login</button>\r\n</form>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/services/user.service */ "./src/app/user/services/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (x) {
        console.log(x);
        /*
        this.userService.login(username, password)
          .subscribe((result)=>{
            if(result){
              this.router.navigate(['/dashboard']);
            }
          });
        */
        this.router.navigate(['/dashboard']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _user_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return null;
        return value.substr(0, 50) + '....';
    };
    SummaryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JumperDirective = /** @class */ (function () {
    function JumperDirective(el) {
        this.el = el;
        this.position = 'left';
    }
    JumperDirective.prototype.onMouseEnter = function () {
        this.togglePosition();
    };
    JumperDirective.prototype.togglePosition = function () {
        if (this.position === 'left') {
            this.el.nativeElement.style.float = 'left';
            this.position = 'right';
        }
        else {
            this.el.nativeElement.style.float = 'right';
            this.position = 'left';
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
    return JumperDirective;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RbtnDirective = /** @class */ (function () {
    function RbtnDirective(el) {
        this.el = el;
    }
    RbtnDirective.prototype.ngAfterViewInit = function () {
        // if (this.role.includes(Role.DELETE_BUG))
        //   this.el.nativeElement.disabled = true;
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
    return RbtnDirective;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



/**
 * Base backend service. Business services should import this instead of using HttpClient directly.
 */
var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
    }
    /**
     *
     * @param url URL to call
     * @param params optional parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.get = function (url, params) {
        return this.invoke('GET', url, null, params);
    };
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.put = function (url, data, params) {
        return this.invoke('PUT', url, data, params);
    };
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.patch = function (url, data, params) {
        return this.invoke('PATCH', url, data, params);
    };
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.post = function (url, data, params) {
        return this.invoke('POST', url, data, params);
    };
    /**
     *
     * @param url URL to call
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    BackendService.prototype.delete = function (url, params) {
        return this.invoke('DELETE', url, null, params);
    };
    BackendService.prototype.invoke = function (method, url, data, params) {
        if (data === void 0) { data = {}; }
        var options = {
            body: data,
            params: params,
            headers: {
                'Accept-Language': 'en'
            }
        };
        if (!url) {
            throw new Error('No URL provided.');
        }
        var requestUrl = "" + url;
        return this.http.request(method, requestUrl, options);
    };
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend.service */ "./src/app/user/services/backend.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(backendService, http) {
        this.backendService = backendService;
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.getAllUsers = function () {
        //return this.backendService.get('jbugs/jbugs-api/users');
        //return this.backendService.get('localhost:8080/jbugs/jbugs-api/users');
        return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users');
    };
    UserService.prototype.updateUser = function (user) {
        return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/users', user);
    };
    UserService.prototype.addUser = function (user) {
        return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users', user);
    };
    UserService.prototype.getUser = function (userName) {
        var urlGet;
        urlGet = 'http://localhost:8080/jbugs/jbugs-api/users/getUser/' + userName;
        //return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users/getUser/',userName);
        return this.backendService.get(urlGet);
    };
    // public login(username, password){
    //   return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users', {username, password})
    //     .pipe(map(user => {
    //       if(user && user.token){
    //         localStorage.setItem('currentUser', user.token);
    //         this.loggedIn = true;
    //       }
    //       return user.succes;
    //     }));
    // }
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user-add/user-add.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-invalid.ng-touched {\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWFkZC91c2VyLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLWFkZC91c2VyLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-add/user-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form='ngForm'>\r\n  <div class=\"form-group\">\r\n    <label for=\"firstName\"> First Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"firstName\"\r\n           name=\"firstName\"\r\n           required\r\n           minlength=\"5\"\r\n           #firstName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">\r\n      <div *ngIf=\"firstName.errors.required\">The field is required</div>\r\n      <div *ngIf=\"firstName.errors.minlength\">First name should have at least 5 letters.</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"lastName\"> Last Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"lastName\"\r\n           name=\"lastName\"\r\n           required\r\n           #lastName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"lastName.touched && lastName.invalid\">\r\n      <div *ngIf=\"lastName.errors.required\">The field is required</div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"mobileNumber\"> Mobile Number </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"mobileNumber\"\r\n           name=\"mobileNumber\"\r\n           required\r\n           pattern=\"[+]4[0,9]{1}[0-9]{9}\"\r\n           #mobileNumber=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"mobileNumber.touched && mobileNumber.invalid\">\r\n      <div *ngIf=\"mobileNumber.errors.pattern\">The pattern is invalid.</div>\r\n      <div *ngIf=\"mobileNumber.errors.required\">The field is required</div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\"> Email </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"email\"\r\n           name=\"email\"\r\n           required\r\n           pattern=\"[a-zA-Z0-9.-_]{1,}@msggroup.com\"\r\n           #email=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\">\r\n      <div *ngIf=\"email.errors.pattern\">The pattern is invalid.</div>\r\n      <div *ngIf=\"email.errors.required\">The field is required</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"roles\">Roles:</label>\r\n    <div *ngFor=\"let role of roles\">\r\n      <label>\r\n        <input type=\"checkbox\"\r\n               name=\"roles\"\r\n               id=\"roles\"\r\n               required\r\n               value=\"{{role.name}}\"\r\n               [(ngModel)]=\"role.checked\"/>\r\n        {{role.name}}\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" (click)=\"addUser(form)\" [disabled]=\"form.invalid\" class=\"btn btn-primary\">Add</button>\r\n  <button type=\"button\" (click)=\"back()\" class=\"btn btn-primary\">Back</button>\r\n</form>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(userService, router) {
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
    }
    Object.defineProperty(UserAddComponent.prototype, "selectedOptions", {
        get: function () {
            return this.roles
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.name; });
        },
        enumerable: true,
        configurable: true
    });
    UserAddComponent.prototype.ngOnInit = function () {
    };
    UserAddComponent.prototype.addUser = function (form) {
        this.userNew.firstName = form.value.firstName;
        this.userNew.lastName = form.value.lastName;
        this.userNew.email = form.value.email;
        this.userNew.mobileNumber = form.value.mobileNumber;
        this.userNew.roles = this.selectedOptions;
        this.userService.addUser(this.userNew).subscribe(function (result) {
            if (result.messageCode) {
                alert("Error while creating user: " + result.message);
            }
            else {
                alert("User with username: " + result.firstName + " was successfully created!");
            }
        });
    };
    UserAddComponent.prototype.back = function () {
        this.router.navigate(['/dashboard/users']);
    };
    UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/user/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/user/user-add/user-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-invalid.ng-touched {\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user-edit/user-edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-edit/user-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form='ngForm'>\r\n  <div class=\"form-group\">\r\n    <label> First Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"firstName\"\r\n           name=\"firstName\"\r\n           required\r\n           minlength=\"5\"\r\n           [ngModel]=\"user.firstName\"\r\n           #firstName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">\r\n      <div *ngIf=\"firstName.errors.pattern\">The pattern is invalid.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> Last Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"lastName\"\r\n           name=\"lastName\"\r\n           required\r\n           [ngModel]=\"user.lastName\"\r\n           #lastName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"lastName.touched && lastName.invalid\">\r\n      <div *ngIf=\"firstName.errors.required\">The field is required</div>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> Email </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"email\"\r\n           name=\"email\"\r\n           required\r\n           pattern=\"[a-zA-Z0-9.-_]{1,}@msggroup.com\"\r\n           [ngModel]=\"user.email\"\r\n           #email=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\">\r\n      <div *ngIf=\"email.errors.pattern\">The pattern is invalid.</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label> Mobile Number </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"mobilNumber\"\r\n           name=\"mobileNumber\"\r\n           required\r\n           pattern=\"[+]4[0,9]{1}[0-9]{9}\"\r\n           [ngModel]=\"user.mobileNumber\"\r\n           #mobileNumber=\"ngModel\"\r\n           ngModel\r\n           >\r\n\r\n    <div class=\"alert alert-danger\" *ngIf=\"mobileNumber.touched && mobileNumber.invalid\">\r\n      <div *ngIf=\"mobileNumber.errors.pattern\">The pattern is invalid.</div>\r\n      <div *ngIf=\"mobileNumber.errors.required\">The field is required.</div>\r\n\r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" (click)=\"submit(form)\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Update</button>\r\n\r\n\r\n</form>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");




var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.user = {};
    }
    UserEditComponent.prototype.submit = function (form) {
        this.user.firstName = form.value.firstName;
        this.user.lastName = form.value.lastName;
        this.user.email = form.value.email;
        this.user.mobileNumber = form.value.mobileNumber;
        //only for test
        //todo remove this line
        //this.userService.updateUser(this.user);
        this.userService.updateUser(this.user).subscribe(function (result) { return console.log(result); }, function (error) {
            console.log(error);
        });
    };
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.username = params.get('userName');
        });
        console.log(this.username);
        this.userService.getUser(this.username).subscribe(function (user) {
            _this.user = user;
        });
        //this.user.mobileNumber = "0040666666"
        //console.log(this.user.mobileNumber);
        //this.user = this.userComponent.currentUser;
        console.log("currentUser get from ...:");
        /* this.sub = this. activatedRoute.params.subscribe(params => {
           this.id = +params['id'];*/
        //console.log(this.userComponent.currentUser.email);
        /* });*/
    };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/user/user-edit/user-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/user/user-list/user-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n  text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test-header\">Selection: <span id=\"selectedRow\"></span></div>\r\n<ag-grid-angular\r\n  id=\"myGrid\"\r\n  style=\"width: 1000px; height: 1000px;\"\r\n  class=\"ag-theme-balham\"\r\n  [rowData]=\"userList\"\r\n  [columnDefs]=\"columnDefs\"\r\n  [rowSelection]=\"rowSelection\"\r\n  (selectionChanged)=\"onSelectionChanged()\"\r\n  (gridReady)=\"onGridReady($event)\"\r\n>\r\n</ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/user/user-list/user-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-list/user-list.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.columnDefs = [
            { headerName: 'Firstname', field: 'firstName', sortable: true, filter: true },
            { headerName: 'Lastname', field: 'lastName', sortable: true, filter: true },
            { headerName: 'Email', field: 'email', sortable: true, filter: true },
            { headerName: 'Mobile', field: 'mobileNumber', sortable: true, filter: true },
            { headerName: 'Username', field: 'username', sortable: true, filter: true }
        ];
        this.rowSelection = "single";
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers()
            .subscribe(function (userList) {
            _this.userList = userList;
        });
    };
    UserListComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    UserListComponent.prototype.onSelectionChanged = function () {
        var selectedRows = this.gridApi.getSelectedRows();
        var selectedRowsString = "";
        selectedRows.forEach(function (selectedRow, index) {
            if (index !== 0) {
                selectedRowsString += ", ";
            }
            selectedRowsString += selectedRow.firstName;
            document.getElementById('selectedRow').innerText = selectedRowsString;
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user-management/user-management.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/user-management/user-management.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-invalid.ng-touched {\r\n  border: 2px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/user-management/user-management.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/user-management/user-management.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form='ngForm' (ngSubmit)=\"submit(form)\">\r\n  <div class=\"form-group\">\r\n    <label> Course Name </label>\r\n    <input class=\"form-control\"\r\n           type=\"text\"\r\n           id=\"courseName\"\r\n           name=\"courseName\"\r\n           required\r\n           #courseName=\"ngModel\"\r\n           ngModel>\r\n    <div class=\"alert alert-danger\" *ngIf=\"courseName.touched && courseName.invalid\">Required field</div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"category1\"> Category</label>\r\n    <select\r\n      class=\"form-control\"\r\n      id=\"category1\"\r\n      name=\"category1\"\r\n      multiple\r\n      #category1=\"ngModel\"\r\n      ngModel>\r\n      <option *ngFor=\"let ho of category\">{{ho.name}}</option>\r\n      <div class=\"alert alert-danger\" *ngIf=\"category1.touched && category1.invalid\">Required field</div>\r\n    </select>\r\n  </div>\r\n\r\n\r\n  <div class=\"form-group\">\r\n    <label>\r\n      <input type=\"checkbox\" name=\"hasGuarantee\" ngModel>\r\n      30-day money-back guarantee </label>\r\n\r\n  </div>\r\n\r\n\r\n  <!--  <div ngModelGroup=\"user\" #user=\"ngModelGroup\">-->\r\n  <!--    <div class=\"form-group\">-->\r\n  <!--      <label for=\"firstName1\"> First Name group </label>-->\r\n  <!--      <input class=\"form-control\"-->\r\n  <!--             type=\"text\"-->\r\n  <!--             id=\"firstName1\"-->\r\n  <!--             name=\"firstName1\"-->\r\n  <!--             required-->\r\n  <!--             pattern=\"abba\"-->\r\n  <!--             (ngModelChange)=\"log(firstName1)\"-->\r\n  <!--             #firstName1=\"ngModel\"-->\r\n  <!--             ngModel>-->\r\n  <!--      <div class=\"alert alert-danger\" *ngIf=\"firstName1.touched && firstName1.invalid\">-->\r\n  <!--        <div *ngIf=\"firstName1.errors.required\" >The field is required</div>-->\r\n  <!--        <div *ngIf=\"firstName1.errors.pattern\">The pattern is invalid.</div>-->\r\n  <!--      </div>-->\r\n\r\n  <!--    </div>-->\r\n  <!--  </div>-->\r\n\r\n  <!--  <div class=\"form-group\">-->\r\n  <!--    <label for=\"firstName\"> FirstName </label>-->\r\n  <!--    <input class=\"form-control\"-->\r\n  <!--           type=\"text\"-->\r\n  <!--           id=\"firstName\"-->\r\n  <!--            name=\"firstName\"-->\r\n  <!--           required-->\r\n  <!--           pattern=\"[+]4{1}[0,9]{1}[0-9]{9}\"-->\r\n  <!--           (ngModelChange)=\"log(firstName)\"-->\r\n  <!--           #firstName=\"ngModel\"-->\r\n  <!--           ngModel>-->\r\n  <!--    <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">-->\r\n  <!--      <div *ngIf=\"firstName.errors.required\" >The field is required</div>-->\r\n  <!--      <div *ngIf=\"firstName.errors.pattern\">The pattern is invalid.</div>-->\r\n  <!--    </div>-->\r\n\r\n  <!--  </div>-->\r\n\r\n  <!--  <div class=\"form-group\">-->\r\n  <!--    <label> LastName </label>-->\r\n  <!--    <input class=\"form-control\"-->\r\n  <!--           type=\"text\"-->\r\n  <!--           id=\"lastName\"-->\r\n  <!--           name=\"lastName\"-->\r\n  <!--           required-->\r\n  <!--           (ngModelChange)=\"log(lastName)\"-->\r\n  <!--           #lastName=\"ngModel\"-->\r\n  <!--           ngModel>-->\r\n  <!--    <div class=\"alert alert-danger\" *ngIf=\"lastName.touched && lastName.invalid\">Last name is required</div>-->\r\n\r\n  <!--    <div class=\"form-group\">-->\r\n  <!--      <label> Comment </label>-->\r\n  <!--      <textarea id=\"comment\"-->\r\n  <!--                type=\"textarea\"-->\r\n  <!--                class=\"form-control\">-->\r\n\r\n  <!--      </textarea>-->\r\n  <!--    </div>-->\r\n\r\n  <!--    <div class=\"form-group\">-->\r\n  <!--      <label>-->\r\n  <!--        <input type=\"checkbox\" name=\"isSelected\" ngModel>-->\r\n  <!--        CheckBox </label>-->\r\n\r\n  <!--    </div>-->\r\n\r\n  <!--    <div class=\"radio\" *ngFor=\"let ho of hobbies\">-->\r\n  <!--      <label>-->\r\n  <!--        <input type=\"radio\"-->\r\n  <!--               name=\"hobbies\"-->\r\n  <!--               ngModel-->\r\n  <!--               [value]=\"ho.id\">-->\r\n  <!--        {{ho.name}} </label>-->\r\n  <!--    </div>-->\r\n\r\n  <!--    <div class=\"form-group\">-->\r\n  <!--      <label for=\"hobbies\"> Hobbits dropdown</label>-->\r\n  <!--      <select-->\r\n  <!--      class=\"form-control\"-->\r\n  <!--      id=\"hobbies\"-->\r\n  <!--      name=\"bobbies\"-->\r\n  <!--      multiple-->\r\n  <!--      ngModel>-->\r\n  <!--        <option>A</option>-->\r\n  <!--        <option>B</option>-->\r\n\r\n  <!--      </select>-->\r\n  <!--    </div>-->\r\n\r\n\r\n  <p>\r\n    {{form.value | json }}\r\n  </p>\r\n\r\n  <!--    <p>-->\r\n  <!--      {{text2 | summary }}-->\r\n  <!--    </p>-->\r\n\r\n  <button class=\"btn btn-primary\" [disabled]=\"form.invalid\">Create</button>\r\n  <!--  </div>-->\r\n</form>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent() {
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
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent.prototype.log = function (x) {
        console.log(x);
    };
    UserManagementComponent.prototype.submit = function (form) {
        console.log(form);
    };
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/user/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/user/user-management/user-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n  text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.firstname = "Johndoe";
    }
    UserComponent.prototype.alertUser = function (person) {
        this.output.emit(person);
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserComponent.prototype, "output", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user/user-list/user-list.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _directives_jumper_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/jumper.directive */ "./src/app/user/directives/jumper.directive.ts");
/* harmony import */ var _directives_rbtn_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/rbtn.directive */ "./src/app/user/directives/rbtn.directive.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/backend.service */ "./src/app/user/services/backend.service.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__);









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"],
                _user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _directives_jumper_directive__WEBPACK_IMPORTED_MODULE_5__["JumperDirective"],
                _directives_rbtn_directive__WEBPACK_IMPORTED_MODULE_6__["RbtnDirective"]
            ],
            providers: [
                _services_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([])
            ],
            exports: [
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"],
                _user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
                _directives_jumper_directive__WEBPACK_IMPORTED_MODULE_5__["JumperDirective"],
                _directives_rbtn_directive__WEBPACK_IMPORTED_MODULE_6__["RbtnDirective"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/user/users/users.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/users/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/users/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<a *ngFor=\"let user of userList\" class=\"col-1-4\">-->\r\n<button routerLink=\"/user-add\">Add a new user</button>\r\n\r\n<h1>Users</h1>\r\n\r\n<app-user-list></app-user-list>\r\n<div *ngFor=\"let person of userList\">\r\n  <div>{{person.firstName}} <button (click)=\"updateUser(person)\"> {{\"Update\"}}</button>\r\n</div>\r\n<!--</a>-->\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showList = true;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers()
            .subscribe(function (userList) {
            _this.userList = userList;
        });
    };
    UsersComponent.prototype.updateUser = function (person) {
        this.currentUser = person;
        alert(person.firstName);
        //this.id = 1;
        //this.router.navigateByUrl("userid/edit");
        this.router.navigate(["/edit", this.currentUser.username]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsersComponent.prototype, "output", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/user/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/user/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main.js.map