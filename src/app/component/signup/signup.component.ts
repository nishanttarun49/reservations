import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account-service';
// import { ActivatedRoute, Router} from '@angular/router';
import { UserModel } from '../../models/user_model';
import { CookieService } from 'ng2-cookies';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  private headers = new Headers();
  public userModel:UserModel;
  public addValidationError:UserModel;
  message:string='';
  sucMsg:boolean=false;
  errMsg:boolean=false;
  loader:boolean=false;
  constructor(private router:Router ,private accountService:AccountService,private authService: AuthService,private cookieService:CookieService) { }
  
  ngOnInit() {
    //if (Cookie.check("usersCookies")) {
      //this.headers.set('authorization', Cookie.get('usersCookies'));
    //}
    this.userModel=<UserModel>{
      Id:'0',
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
      auth:''
    }

    this.addValidationError=<UserModel>{
      Id:'0',
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
      auth:''
    }

  }
  signInWithGoogle(): void {
    var oath = this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data)=>{
      debugger;
      if(data){
        this.loader=true;
        this.userModel.email=data.email;
        this.userModel.name=data.name;
        this.userModel.auth=data.authToken;
        this.accountService.socialLogin(this.userModel).subscribe((data)=>{
          debugger;
          //if(data.code==200){
            this.sucMsg=true;
            this.loader=false;
            this.message="User Registration Successful..";
          this.cookieService.set('usersCookies',data.token,1);
          this.cookieService.set('role',data.name,1);      
          this.cookieService.set('id',data.id,1);
          this.router.navigate(['/dashboard']);
        });
      }
    });
  } 
 
  signOut(): void {
    this.authService.signOut();
  }
  sucMsgHide(){
    this.sucMsg=false;
  }
  errMsgHide(){
    this.errMsg=false;
  }
  register(){
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
    // if(this.userModel.phone.length<10){
    //   this.addValidationError.phone='Enter Valid Phone Number.';
    //   valid=false; 
    // }
    if(this.userModel.password==""){
      this.addValidationError.password='Password cannot be empty.';
      valid=false; 
    }
    if(this.userModel.password==""){
      this.addValidationError.password='Password cannot be empty.';
      valid=false; 
    }
    if(this.userModel.confirmPassword!=this.userModel.password){
      this.addValidationError.confirmPassword='Password do not match.';
      valid=false; 
    } 
    debugger;      
    if(valid){ 
      debugger;
      this.loader=true;
      this.accountService.register(this.userModel).subscribe((data)=>{
        debugger;
        if(data.code==200){
          this.sucMsg=true;
          this.loader=false;
          this.message="User Registration Successful..";
          this.userModel.name="";
          this.userModel.email="";
          this.userModel.password="";
          this.userModel.confirmPassword="";
          this.cookieService.set('usersCookies',data.token,1);
          this.cookieService.set('role',data.name,1);      
          this.cookieService.set('id',data.id,1);
          this.router.navigate(['/dashboard']);
          setTimeout(()=>{
            this.sucMsg=false;
            this.errMsg=false; 
            var close_btn=document.getElementById('addModelCloseBtn');
            console.log(close_btn);
            var dat=close_btn.click();
            console.log(dat);
          },3000);
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
      },(error)=>{
        debugger;
        this.errMsg=true;
          this.loader=false;
          //if(error.error){
            var err=JSON.parse(error.error);
            debugger;
            if(err.email){
              this.message=err.email;
            }else if(err.password){
              this.message=err.password;
            }else{
              this.message=err;
            }
         // }
          setTimeout(()=>{
            this.sucMsg=false;
            this.errMsg=false; 
            this.message='';
          },3000);
      })
    }else{
      this.loader=false;
    }
  }
}
