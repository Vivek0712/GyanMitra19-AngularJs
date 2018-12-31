import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccomodationComponent } from './user-accomodation.component';

describe('UserAccomodationComponent', () => {
  let component: UserAccomodationComponent;
  let fixture: ComponentFixture<UserAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
