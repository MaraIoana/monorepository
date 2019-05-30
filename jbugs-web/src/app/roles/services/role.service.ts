import { Injectable } from '@angular/core';
import {BackendService} from "../../user/services/backend.service";
import {Observable} from "rxjs";
import {Role} from "../../models/role.model";
import {RoleType} from "../../models/roleType.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl:string = 'http://localhost:8080/jbugs/jbugs-api';

  constructor(private backendService:BackendService) { }

  public getRoles(): Observable<Role[]> {
    return this.backendService.get(this.baseUrl + '/roles');
  }

  public getRole(roleType:RoleType):Observable<Role>{
    return this.backendService.post(this.baseUrl + '/roles/role',roleType);
  }

  public savePermission(role:Role):Observable<Role> {
    if (role.permissions.length === 0) {
      return this.backendService.post(this.baseUrl + '/roles/save', {
          'type': role.type,
          'permissions': {}
        })
      }
    return this.backendService.post(this.baseUrl + '/roles/save', role);
  }
}
