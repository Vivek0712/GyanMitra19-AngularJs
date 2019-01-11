import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccSuccessComponent } from './acc-success.component';

describe('AccSuccessComponent', () => {
  let component: AccSuccessComponent;
  let fixture: ComponentFixture<AccSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
