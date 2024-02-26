import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
  getData : any;
  parseToken:any;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //gettting token from local storage
    this.getData = localStorage.getItem('authToken')
    this.parseToken = JSON.parse(this.getData)
   
    //clonning request
    const cloneRequest = request.clone({
    //setting headers token 
      setHeaders: {
        Authorization: `bearer ${this.parseToken}`
      }
    })                 //instead of sending original request we are sending clone request with headers 
    return next.handle(cloneRequest);
  }
}
