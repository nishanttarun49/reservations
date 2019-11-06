import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesWeCanTicketComponent } from './airlines-we-can-ticket.component';

describe('AirlinesWeCanTicketComponent', () => {
  let component: AirlinesWeCanTicketComponent;
  let fixture: ComponentFixture<AirlinesWeCanTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinesWeCanTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesWeCanTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
