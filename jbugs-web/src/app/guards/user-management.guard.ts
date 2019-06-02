import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementGuard implements CanActivate {

  permissions:string[];

  constructor(private router:Router) {
    //todo Depending on how the session is created, here you should extract permissions from active user
    //todo After that, this Guard should be set in app-routing.module.ts
    if (this.router.getCurrentNavigation().extras.replaceUrl) {
      this.router.navigateByUrl("/error", {state: {message:'Thats not cute!'}});
    } else {
      this.permissions = this.router.getCurrentNavigation().previousNavigation.extras.state.permissions;
    }
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.hasUserManagement();
  }

  hasUserManagement(){
    if(this.permissions.includes("USER_MANAGEMENT")){
      return true;
    }
    else {
      return false;
    }
  }

}
