import {Injectable} from "@angular/core";

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs";
import {PermissionService} from "../role/services/permission.service";

@Injectable({

  providedIn: 'root',

})

export class LoggedInGuard implements CanActivate {

  private permissions: string[];

  constructor(public router: Router,
              public permissionService: PermissionService) {

    //todo Depending on how the session is created, here you should extract permissions from active user
    //     //todo After that, this Guard should be set in app-routing.module.ts
    //this.permissions = this.permissionService.getPermissionsForCurrentUser();

  }


  /**

   * Check if we have a valid auth token

   * @param next

   * @param state

   */

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


    //ToDo if authService.isLoggedIn && hasRoles(user)
    if(localStorage.getItem('auth_token')!==null)
      return true;
    else {
      this.router.navigate(['/login'])
      return false;
    }
  }

}
