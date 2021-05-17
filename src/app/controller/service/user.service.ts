import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user.model';
import jwt_decode from "jwt-decode";
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localStorage: WindowLocalStorage;
  private _user: User;
  private _products : Array<Product>;
  private _baseUrl = "http://localhost:8000";
  private _userUrl = "/user/doInscription";
  private _loginUrl = "/api/login_check";
  private _productUrl = "/api/products";
  private loggedIn = false;
  private date = new Date();

  constructor(private http: HttpClient) { }

  public signUp(userData){
    this.user.username = userData.get('userName').value;
    this.user.email = userData.get('email').value;
    this.user.password = userData.get('password').value;
    return this.http.post<any>(this._baseUrl + this._userUrl, this.user);
  }

  public signIn(username,password) {
    return this.http.post(this._baseUrl + this._loginUrl, {'username':username,'password':password});
  }

  public getProducts(){
    this.http.get<Array<Product>>(this._baseUrl + this._productUrl, { 'headers': new HttpHeaders({
              'Authorization':'Bearer ' + this.getToken() })}
              ).subscribe(
            data=>{
              this.products = data;
              console.log(data);
            }
        )
  }


  public isLoggedIn(){
    if(localStorage.getItem('myFirstToken') && !this.isExpired()){
       return this.loggedIn = true;
    }
  }

  public isExpired(): boolean{
    const now = Math.floor(Date.now()/1000);
    const expiredDate =  Number(this.getExpiredAt());
    return now > expiredDate;
  }

  public getToken(): string {
    return localStorage.getItem('myFirstToken');
  }

  public getExpiredAt(): string {
    return localStorage.getItem('expiredAt');
  }

  get user(): User {
    if(this._user == null ){
      this._user = new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get products(): Array<Product> {
    if(this._products == null ){
      this._products = new Array<Product>();
    }
    return this._products;
  }

  set products(value: Array<Product>) {
    this._products = value;
  }
}
