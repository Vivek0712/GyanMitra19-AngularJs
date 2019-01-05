import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCartConfirmationComponent } from './admin-cart-confirmation.component';

describe('AdminCartConfirmationComponent', () => {
  let component: AdminCartConfirmationComponent;
  let fixture: ComponentFixture<AdminCartConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCartConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCartConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
