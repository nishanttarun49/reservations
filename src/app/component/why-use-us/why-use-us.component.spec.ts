import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUseUsComponent } from './why-use-us.component';

describe('WhyUseUsComponent', () => {
  let component: WhyUseUsComponent;
  let fixture: ComponentFixture<WhyUseUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyUseUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
