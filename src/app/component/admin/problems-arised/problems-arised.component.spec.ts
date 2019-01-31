import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsArisedComponent } from './problems-arised.component';

describe('ProblemsArisedComponent', () => {
  let component: ProblemsArisedComponent;
  let fixture: ComponentFixture<ProblemsArisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsArisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsArisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
