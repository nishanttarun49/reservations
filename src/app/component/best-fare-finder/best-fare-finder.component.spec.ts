import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFareFinderComponent } from './best-fare-finder.component';

describe('BestFareFinderComponent', () => {
  let component: BestFareFinderComponent;
  let fixture: ComponentFixture<BestFareFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestFareFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestFareFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
