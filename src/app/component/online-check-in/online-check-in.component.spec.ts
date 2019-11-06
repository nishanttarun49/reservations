import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCheckInComponent } from './online-check-in.component';

describe('OnlineCheckInComponent', () => {
  let component: OnlineCheckInComponent;
  let fixture: ComponentFixture<OnlineCheckInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCheckInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
