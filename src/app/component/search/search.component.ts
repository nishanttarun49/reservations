import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UserModel } from '../../models/user_model';
import { SearchModel } from '../../models/search_model';
import { AccountService } from '../../services/account-service';
import { Router } from '@angular/router';
import { Moment } from 'moment';
export interface Airport {
  code: string;
  value: string;
  text: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  [x: string]: any;
  public userModel:UserModel;
  public searchModel:SearchModel
  public addValidationError:UserModel;
  selected: {startDate: Moment, endDate: Moment};
  public searchValidationError:SearchModel;
  searchType:string;
  message:string='';
  sucMsg:boolean=false;
  errMsg:boolean=false;
  loader:boolean=false;
  stateCtrl = new FormControl();
  loginShow:boolean=true;
  modalShow:boolean=false;
  signTab:boolean=false;
  regShow:boolean=false;
  classPopup:boolean=false;
  myControl:Array<FormControl>=[new FormControl()];
  myControl2 = Array<FormControl>();
  options: Airport[] = [];
  options2: Airport[] = [];
  filteredOptions: Observable<Airport[]>;
  filteredOptions2: Observable<Airport[]>;   
  cityCount:number=1;
  demoForm: FormGroup;
   
   arrayItems: {
     id: number;
     title: string;
   }[];
  
  constructor(private router: Router,private accountService:AccountService,private _formBuilder: FormBuilder) {
    this.demoForm = this._formBuilder.group({
      demoArray: this._formBuilder.array(
        [],
        this.minSelectedCheckboxes()
      )
    });
  }

  ngOnInit() {
    if(this.router.url=='signup'){
      debugger;
      this.signTab=true;
    }else{
      this.signTab=false;
    }
    this.filteredOptions = this.myControl[0].valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.code),
      map(name => name ? this._filter(name) : this.options.slice())
    );
    this.selected= {
      startDate: null, 
      endDate: null
    };
    
    this.userModel=<UserModel>{
      Id:'0',
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    }
    this.searchModel=<SearchModel>{
      origin:[''],
      destination:[''],
      departing:[''],
      returning:''
    }
    this.searchValidationError=<SearchModel>{
      origin:[''],
      destination:[''],
      departing:[''],
      returning:''
    }

    this.addValidationError=<UserModel>{
      Id:'0',
      name:'',
      email:'',
      password:'',
      confirmPassword:''
    }
    this.arrayItems = [];

    this.searchType='return';
  }

  minSelectedCheckboxes(): ValidatorFn {
    const validator: ValidatorFn = (formArray: FormArray) => {
    
       const selectedCount = formArray.controls
          .map(control => control.value)
          .reduce((prev, next) => next ? prev + next : prev, 0);
       
       return selectedCount >= 1 ? null : { notSelected: true };
    };
 
    return validator;
  }

  addCity(){
    this.cityCount++;
  }
  setSearchType(flighttype){
    this.searchType=flighttype;
  }
  getAirport(type,i){
    if(type=='origin'){
      this.accountService.getAirport(this.searchModel.origin[i],type).subscribe((data)=>{
        debugger;
        this.sucMsg=true;
        this.loader=false;
        this.options=data;
        this.filteredOptions = this.myControl[i].valueChanges.pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.value),
          map(value => value ? this._filter(value) : this.options.slice())
        );
      },(error)=>{
        this.errMsg=true;
        this.loader=false;
        this.message=error;
        setTimeout(()=>{
          this.sucMsg=false;
          this.errMsg=false; 
          this.message='';
        },1500);
      })
    }else{
      this.accountService.getAirport(this.searchModel.destination[i],type).subscribe((data)=>{
        debugger;
        this.sucMsg=true;
        this.loader=false;
        this.options2=data;
        this.filteredOptions2 = this.myControl2[i].valueChanges.pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.value),
          map(value => value ? this._filter(value) : this.options2.slice())
        );
      },(error)=>{
        this.errMsg=true;
        this.loader=false;
        this.message=error;
        setTimeout(()=>{
          this.sucMsg=false;
          this.errMsg=false; 
          this.message='';
        },1500);
      })
    }
  }

  topopup(){
    
  }
  openDateRange(){
    var close_btn=document.getElementById('date-range');
    console.log(close_btn);
    setTimeout(()=>{
      var dat=close_btn.click();
    },500);
  }
  displayFn(i,user?: Airport): string | undefined {
    return user ? user.code : undefined;
  }
  displayFn2(i,user?: Airport): string | undefined {
    return user ? user.code : undefined;
  }

  private _filter(name: string): Airport[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.code.toLowerCase().indexOf(filterValue) === 0);
  }
  showClassPopup(){
    this.classPopup=true;
  }

  counter(i: number) {
    //debugger;
    return new Array(i);
  }
  
}

