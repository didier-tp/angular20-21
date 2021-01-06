import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../data/login';
import { LoginResponse } from '../data/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userRoles : string | undefined = undefined; //roles de la personne connectée

  private _apiBaseUrl ="./login-api"; 
  // with prefix in proxy.conf.json 
  // (ng serve --proxy-config proxy.conf.json)
  // or other config in production mode

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _http : HttpClient) { }

  public postLogin$(login: Login): Observable<LoginResponse>{
    let wsUrl  = this._apiBaseUrl +  "/public/auth" ; 
    return this._http.post<LoginResponse>(wsUrl ,
                                          login,
                                          {headers: this._headers} )
                     .pipe(
                        //tap permet d'enregistrer un traitement supplémentaire,
                        //return inchangé
                        //nécessite import { tap } from 'rxjs/operators'
                        tap(loginResponse => this.storeTokenOfLoginResponse(loginResponse) ) 
                     )
   }

   storeTokenOfLoginResponse(loginResponse : LoginResponse){
     sessionStorage.setItem('token',loginResponse.token);
     if(loginResponse.status){
       this.userRoles = loginResponse.roles;
     }else {
      this.userRoles = null;
     }
   }
}
