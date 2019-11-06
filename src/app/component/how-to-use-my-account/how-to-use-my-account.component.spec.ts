import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseMyAccountComponent } from './how-to-use-my-account.component';

describe('HowToUseMyAccountComponent', () => {
  let component: HowToUseMyAccountComponent;
  let fixture: ComponentFixture<HowToUseMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToUseMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToUseMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
