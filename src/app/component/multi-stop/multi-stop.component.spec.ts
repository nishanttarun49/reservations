import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStopComponent } from './multi-stop.component';

describe('MultiStopComponent', () => {
  let component: MultiStopComponent;
  let fixture: ComponentFixture<MultiStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
