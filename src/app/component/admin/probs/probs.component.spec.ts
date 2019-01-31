import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbsComponent } from './probs.component';

describe('ProbsComponent', () => {
  let component: ProbsComponent;
  let fixture: ComponentFixture<ProbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
