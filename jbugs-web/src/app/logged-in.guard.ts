import {Injectable} from "@angular/core";

import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";

import {Observable} from "rxjs";
import {UserService} from "./user/services/user.service";


@Injectable({

  providedIn: 'root',

})

export class LoggedInGuard implements CanActivate {


  constructor(private userService: UserService) {

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
    //return this.userService.isLoggedIn();
    return true;
  }

}
