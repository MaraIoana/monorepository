import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PermissionService} from "../role/services/permission.service";
import {state} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class UserManagementGuard implements CanActivate {

  permissions: string[];

  constructor(private router: Router,
              private permissionService: PermissionService) {
    //todo Depending on how the session is created, here you should extract permissions from active user
    //todo After that, this Guard should be set in app-routing.module.ts
    this.permissions = permissionService.getPermissionsForCurrentUser();
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.hasUserManagement();
  }

  hasUserManagement() {
    if (this.permissions.includes("USER_MANAGEMENT")) {
      return true;
    } else {
      this.router.navigate(['/dashboard'],{state : { 'message':"Permission not allowed"}});
      return false;
    }
  }

}
