import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBookSeatsComponent } from './how-to-book-seats.component';

describe('HowToBookSeatsComponent', () => {
  let component: HowToBookSeatsComponent;
  let fixture: ComponentFixture<HowToBookSeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToBookSeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToBookSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
