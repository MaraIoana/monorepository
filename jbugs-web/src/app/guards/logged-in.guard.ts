import {Injectable} from "@angular/core";

import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs";

@Injectable({

  providedIn: 'root',

})

export class LoggedInGuard implements CanActivate {

  private permissions: string[];

  constructor(public router: Router) {

    //todo Depending on how the session is created, here you should extract permissions from active user
    //     //todo After that, this Guard should be set in app-routing.module.ts
    if (this.router.getCurrentNavigation().extras.replaceUrl) {
      this.router.navigateByUrl("/error", {state: {message: 'Thats not cute!'}});
    } else {
      this.permissions = this.router.getCurrentNavigation().extras.state.permissions;
    }
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

    return this.hasRoles();
  }

  hasRoles() {
    if (this.permissions.length) {
      return true;
    } else {
      return false;
    }
  }
}
