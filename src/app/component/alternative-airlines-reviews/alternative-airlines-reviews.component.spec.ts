import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeAirlinesReviewsComponent } from './alternative-airlines-reviews.component';

describe('AlternativeAirlinesReviewsComponent', () => {
  let component: AlternativeAirlinesReviewsComponent;
  let fixture: ComponentFixture<AlternativeAirlinesReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeAirlinesReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeAirlinesReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
