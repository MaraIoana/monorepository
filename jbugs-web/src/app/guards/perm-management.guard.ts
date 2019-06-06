import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PermissionService} from "../role/services/permission.service";

@Injectable({
  providedIn: 'root'
})
export class PermManagementGuard implements CanActivate {

  permissions: string[];

  constructor(private router: Router,
              private permissionService: PermissionService) {
    this.permissions = permissionService.getPermissionsForCurrentUser();
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.hasPermissionManagement();
  }

  hasPermissionManagement() {
    if (this.permissions.includes("PERMISSION_MANAGEMENT")) {
      return true;
    } else {
      this.router.navigate(['/dashboard'],{state : { 'message':"Permission not allowed"}});
      return false;
    }
  }

}
