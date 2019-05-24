import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {RestUser} from "../../models/restUser.models";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) {
  }

  public getAllUsers(): Observable<RestUser[]> {
    //return this.backendService.get('jbugs/jbugs-api/users');
    //return this.backendService.get('localhost:8080/jbugs/jbugs-api/users');
    return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users');


    /* return of([{firstName:"Harry"
       , lastName:"Potter"
       ,email:"potter@hogworts.com"
       ,mobileNumber:"00310566666"}
       ,{firstName:"Calin"
         ,lastName:"Malinas"
         ,email:"CalinMalinas@msg.group"
         ,mobileNumber:"0723456777"}]);*/
  }
 /* public updateUser(): Observable<RestUser[]>{
    return this.backendService.put(user ,'http://localhost:8080/jbugs/jbugs-api/users/edit');
  }*/
}

// export class UserService {
//
//   constructor(private backendService: BackendService) { }
//
//   public getAllUsers(): Observable<RestUser[]>{
//     return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users');
//     // return of([
//     //   {
//     //     firstName: "a",
//     //     lastName: "b",
//     //     email: "c",
//     //     mobileNumber: "d"
//     //   }]).pipe(delay(5000));
//   }
// }

