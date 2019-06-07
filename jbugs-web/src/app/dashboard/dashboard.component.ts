import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login/services/login.service";
import {Router} from "@angular/router";
import {PermissionService} from "../role/services/permission.service";


@Component({

  selector: 'dashboard',

  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {

  public permissionManagement = false;
  public userManagement = false;
  public bugManagement = false;
  public bugClose = false;
  public bugExportPDF = false;
  public isMine = false;

  private permissions: string[];

  constructor(private router:Router,
              private permissionService: PermissionService,
              private authService: LoginService) {
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
    } else
      this.permissionManagement = true;
  }

  checkUserManagement() {
    if (this.permissions.includes("USER_MANAGEMENT")) {
      this.userManagement = false;
    } else
      this.userManagement = true;
  }

  checkBugManagement() {
    if (this.permissions.includes("BUG_MANAGEMENT")) {
      this.bugManagement = false;
    } else
      this.bugManagement = true;
  }

  checkBugClose() {
    if (this.permissions.includes("BUG_CLOSE")) {
      this.bugClose = false;
    } else
      this.bugClose = true;
  }

  checkBugExportPDF() {
    if (this.permissions.includes("BUG_EXPORT_PDF")) {
      this.bugExportPDF = false;
    } else
      this.bugExportPDF = true;
  }

  checkIsMine() {
    if (this.permissions.includes("IS_MINE")) {
      this.isMine = false;
    } else
      this.isMine = true;
  }

  logout(){
    this.authService.logout();
  }
}
