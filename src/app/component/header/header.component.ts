import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UserModel } from '../../models/user_model';
import { SearchModel } from '../../models/search_model';
import { AccountService } from '../../services/account-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userModel:UserModel;
  public addValidationError:UserModel;
  message:string='';
  sucMsg:boolean=false;
  errMsg:boolean=false;
  loader:boolean=false;
  loginShow:boolean=true;
  modalShow:boolean=false;
  signTab:boolean=false;
  regShow:boolean=false;
 
  constructor(private router: Router,private accountService:AccountService) {
    
  }

 
  ngOnInit() {
    if(this.router.url=='signup'){
      debugger;
      this.signTab=true;
    }else{
      this.signTab=false;
    }
   
    

    this.userModel=<UserModel>{
      Id:'0',
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    }
    this.addValidationError=<UserModel>{
      Id:'0',
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }

  modalClick(){
    if(this.modalShow==false){
      this.modalShow=true;
    }else{
      this.modalShow=false;
    }
  }
  loginClick(){
    this.regShow=false;
    this.loginShow=true;
  }
  modalHide(){
    this.modalShow=false;
  }
  regClick(){
    this.regShow=true;
    this.loginShow=false;
  }
  login(){
    //this.loader=true;
    debugger;
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var valid=true;
    this.addValidationError.name='';
    this.addValidationError.email='';
    this.addValidationError.password='';
    this.addValidationError.confirmPassword='';
    //this.addValidationError.phone='';
    if((this.userModel.name=="")||(!this.userModel.name.replace(/\s/g, "").length)) {
      this.addValidationError.name='Name cannot be empty.';
      valid=false;      
    }
    if(!pattern.test(this.userModel.email)){
      this.addValidationError.email='Enter Valid Email.';
      valid=false; 
    }
   
    if(this.userModel.password==""){
      this.addValidationError.password='Password cannot be empty.';
      valid=false; 
    }
    debugger;      
    if(valid){ 
      debugger;
      this.loader=true;
      this.accountService.login(this.userModel).subscribe((data)=>{
        debugger;
        if(data.code==200){
          this.sucMsg=true;
          this.loader=false;
          this.message="User Login Successful..";
          this.userModel.name="";
          this.userModel.email="";
          this.userModel.password="";
          this.userModel.confirmPassword="";
          setTimeout(()=>{
            this.sucMsg=false;
            this.errMsg=false; 
            var close_btn=document.getElementById('addModelCloseBtn');
            console.log(close_btn);
            var dat=close_btn.click();
            console.log(dat);
          },1500);
        }else{
          this.errMsg=true;
          this.loader=false;
          this.message=data.error;
          setTimeout(()=>{
            this.sucMsg=false;
            this.errMsg=false; 
            this.message='';
          },1500);
        }
      })
    }else{
      this.loader=false;
    }

  }
}
