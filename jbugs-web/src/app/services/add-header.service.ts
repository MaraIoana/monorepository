import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {PermissionService} from "../role/services/permission.service";


@Injectable()
export class AddHeader implements HttpInterceptor{
  constructor (private permissionService: PermissionService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders:{
        'Authorization': `Bearer ${this.permissionService.getToken()}`
      }
    });
    //request.headers.append('Authorization' , `Bearer ${this.permissionService.getToken()}`);
    return next.handle(request);
  }

}
