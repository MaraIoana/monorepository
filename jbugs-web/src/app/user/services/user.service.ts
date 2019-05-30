import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {addUser} from "../../models/addUser.model";
import {Url} from "url";
import {RestUser} from "../../models/restUser.models";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) {
  }

  public getAllUsers(): Observable<addUser[]> {
    //return this.backendService.get('jbugs/jbugs-api/users');
    //return this.backendService.get('localhost:8080/jbugs/jbugs-api/users');
    return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users');
  }

  public updateUser(user:RestUser){
    return this.backendService.put('http://localhost:8080/jbugs/jbugs-api/users', user);
  }



  public addUser(user: addUser){
    return this.backendService.post('http://localhost:8080/jbugs/jbugs-api/users',user);
  }

  public getUser(userName: string){
    let urlGet : string;
    urlGet = 'http://localhost:8080/jbugs/jbugs-api/users/getUser/'+ userName;
    //return this.backendService.get('http://localhost:8080/jbugs/jbugs-api/users/getUser/',userName);
    return this.backendService.get(urlGet);
  }
}

