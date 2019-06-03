import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BugManagementGuard implements CanActivate {

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

    return this.hasBugManagement();
  }

  hasBugManagement(){
    if(this.permissions.includes("BUG_MANAGEMENT")){
      return true;
    }
    else {
      return false;
    }
  }

}
