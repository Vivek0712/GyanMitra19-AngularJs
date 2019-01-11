import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFailureComponent } from './acc-failure.component';

describe('AccFailureComponent', () => {
  let component: AccFailureComponent;
  let fixture: ComponentFixture<AccFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
