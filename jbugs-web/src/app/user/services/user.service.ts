import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {RestUser} from "../../models/restUser.models";
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;
  constructor(private backendService: BackendService, private http: HttpClient) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  public getAllUsers(): Observable<RestUser[]> {
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

  public login(username, password){
    return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users', {username, password})
      .pipe(map(user => {
        if(user && user.token){
          localStorage.setItem('currentUser', user.token);
          this.loggedIn = true;
        }
        return user.succes;
      }));
  }

  public isLoggedIn(){
    return this.loggedIn;
  }

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

