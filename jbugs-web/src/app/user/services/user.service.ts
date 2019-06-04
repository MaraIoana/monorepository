import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";
import {addUser} from "../../models/addUser.model";
import {RestUser} from "../../models/restUser.models";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/jbugs/jbugs-api"

  constructor(private backendService: BackendService) {
  }

  public getAllUsers(): Observable<addUser[]> {
    return this.backendService.get(this.baseUrl + '/users');
  }

  public updateUser(user:RestUser){
    return this.backendService.put(this.baseUrl + '/users', user);
  }

  public addUser(user: addUser){
    return this.backendService.post(this.baseUrl + '/users',user);
  }

  public getUser(userName: string){
    var urlGet : string;
    urlGet = this.baseUrl + '/users/getUser/'+ userName;
    return this.backendService.get(urlGet);
  }

  public activateOrResetUser(username:string){
    return this.backendService.put(this.baseUrl + '/users/activate',{
      'username':username
    });
  }

  public deactivateUser(username:string){
    return this.backendService.put(this.baseUrl + '/users/deactivate',{
      'username':username
    });
  }

  public getUserData(username:string){
    return this.backendService.get(this.baseUrl + '/users/getUserData/' + username);
  }
}

