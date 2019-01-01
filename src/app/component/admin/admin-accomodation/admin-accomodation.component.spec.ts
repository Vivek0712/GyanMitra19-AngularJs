import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccomodationComponent } from './admin-accomodation.component';

describe('AdminAccomodationComponent', () => {
  let component: AdminAccomodationComponent;
  let fixture: ComponentFixture<AdminAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
