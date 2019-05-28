import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {RestUser} from "../../models/restUser.models";
import {addUser} from "../../models/addUser.model";
import {Url} from "url";


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

  public updateUser(user:RestUser){
    return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/users', user);
  }



  public addUser(user: addUser){
    return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users',user);
  }

  public getUser(userName: string){
    var urlGet : Url
    urlGet = 'http://localhost:8080/jbugs/jbugs-api/users/getUser/'+ userName;
    //return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users/getUser/',userName);
    return this.backendService.get(urlGet);
  }
}

