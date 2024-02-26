import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public createNewUser: string =
    'https://freeapi.gerasim.in/api/JWT/CreateNewUser';
  public getAllUsers: string = 'https://freeapi.gerasim.in/api/JWT/GetAllUsers';
  public loginUser: string = 'https://freeapi.gerasim.in/api/JWT/login';
  public refreshToken: string = 'https://freeapi.gerasim.in/api/JWT/refresh';

  constructor(private http: HttpClient) {}

  userLogin(obj: any) {
    return this.http.post(this.loginUser, obj);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.getAllUsers);
  }

  createUser(obj: any) {
    return this.http.post(this.createNewUser, obj);
  }

    //  method for checking user login status 
  userLoginStatus():boolean{
  return  localStorage.getItem("loggedUserToken") !== null;
  }
}
