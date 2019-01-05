import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GyanMitra18Component } from './gyan-mitra18.component';

describe('GyanMitra18Component', () => {
  let component: GyanMitra18Component;
  let fixture: ComponentFixture<GyanMitra18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GyanMitra18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyanMitra18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
