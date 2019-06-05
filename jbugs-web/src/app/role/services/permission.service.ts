import {Injectable} from '@angular/core';
import {BackendService} from "../../user/services/backend.service";
import {Observable} from "rxjs";
import {Permission} from "../../models/permission.model";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private baseUrl:string = 'http://localhost:8080/jbugs/jbugs-api';

  constructor(private backendService:BackendService) { }

  public getPermissions(): Observable<Permission[]> {
    return this.backendService.get(this.baseUrl + '/permissions');
  }

  public getUserPermissions(username: string): Observable<any> {
    return this.backendService.post(this.baseUrl + '/permissions/userPermissions', {
      'username': username
    });
  }

  public getRolePermissions(type: string): Observable<any> {
    return this.backendService.post(this.baseUrl + '/permissions/rolePermissions', {
      'type': type
    })
  }

  public decode(token: string){
    try {
      return jwt_decode(token);
    }
    catch (e) {
      return null;
    }
  }

  public getPermissionsForCurrentUser(){
    let token = localStorage.getItem('auth_token');
    return this.decode(token).permissions;
  }

  public getToken(){
    return localStorage.getItem('auth_token');
  }

  public getUsername(){
    let token = localStorage.getItem('auth_token');
    return this.decode(token).username;
  }

}
