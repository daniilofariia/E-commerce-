import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { firstValueFrom, lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(user: any) {
    return new Promise((resolve) =>{
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(account: any) {
    return new Promise((resolve) =>{
            resolve(true);
    });
  }
  /* 
  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/auth/login`, user).toPromise().then();
    if (result && result.acess_token) {
      window.localStorage.setItem('token', result.acess_token);
      return false;
    }

    return true;
  }

  async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.api}/users`, account).toPromise().then();
    return result;
  }
 
  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}*/
}
