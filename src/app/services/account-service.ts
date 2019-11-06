import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http-service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { UserModel } from '../models/user_model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AccountService {  
    private baseUrl='http://127.0.0.1:8000';
    private addUserUrl = this.baseUrl + '/api/' + "register";
    private loginUrl = this.baseUrl + '/api/' + "login";
    private socialLoginUrl = this.baseUrl + '/api/' + "socialLogin";
    private getAirportUrl = this.baseUrl + '/api/' + "getAirport";
    constructor(private baseHttpService: BaseHttpService,private httpClient:HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 
         'Content-Type':'application/json',
         'Access-Control-Allow-Origin':'*'
         //'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
        })
      }
    
    getAirport(term:string,type:string):Observable<any>{
      debugger;
      return this.httpClient.get(this.getAirportUrl + '?term=' + term + '&&type=' + type,this.httpOptions);      
    }
    register(userModel:UserModel):Observable<any>{
        debugger;
        return this.httpClient.post(this.addUserUrl,userModel,this.httpOptions);      
    }
    socialLogin(userModel:UserModel):Observable<any>{
      debugger;
      return this.httpClient.post(this.socialLoginUrl,userModel,this.httpOptions);      
  }
    login(userModel:UserModel):Observable<any>{
      debugger;
      return this.httpClient.post(this.loginUrl,userModel,this.httpOptions);      
  }
}