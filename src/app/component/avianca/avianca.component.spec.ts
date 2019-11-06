import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviancaComponent } from './avianca.component';

describe('AviancaComponent', () => {
  let component: AviancaComponent;
  let fixture: ComponentFixture<AviancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
