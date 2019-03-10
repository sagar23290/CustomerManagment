
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../Models/user-details';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login (UserDetails:UserDetails) {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.post(environment.BASE_API_URL +'api/Login/CheckLogin', UserDetails,httpOptions)
  }

  SaveUserDetails (UserDetails:UserDetails) {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.http.post(environment.BASE_API_URL +'api/Login/SaveUserLogin', UserDetails,httpOptions)
  }
}
