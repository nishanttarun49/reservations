import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
@Component({
  selector: 'app-travelagent',
  templateUrl: './travelagent.component.html',
  styleUrls: ['./travelagent.component.css']
})
export class TravelagentComponent implements OnInit {
;
  constructor() { }
  mySlideImages:any;
  myCarouselImages:any;
  mySlideOptions:any;
  mySlideOptions2:any;
  myCarouselOptions:any;
  ngOnInit() {
    this.mySlideOptions={items: 5, dots: false, nav: true,loop:true,autoplay:true};
    this.mySlideOptions2={items: 2, dots: true, nav: true};
    this.myCarouselOptions={items: 3, dots: false, nav:true};
  }

}
