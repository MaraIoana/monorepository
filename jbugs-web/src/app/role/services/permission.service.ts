import { Injectable } from '@angular/core';
import {BackendService} from "../../user/services/backend.service";
import {Observable} from "rxjs";
import {Permission} from "../../models/permission.model";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  private baseUrl:string = 'http://localhost:8080/jbugs/jbugs-api';

  constructor(private backendService:BackendService) { }

  public getPermissions(): Observable<Permission[]> {
    return this.backendService.get(this.baseUrl + '/permissions');
  }

  public getUserPermissions(username:string):Observable<any>{
    return this.backendService.post(this.baseUrl+ '/permissions/userPermissions',{'username':username
    });
  }

  public getRolePermissions(type:string):Observable<any>{
    return this.backendService.post(this.baseUrl+ '/permissions/rolePermissions',{
      'type':type
    });
  }
}
