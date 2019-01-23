import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToReachUsComponent } from './how-to-reach-us.component';

describe('HowToReachUsComponent', () => {
  let component: HowToReachUsComponent;
  let fixture: ComponentFixture<HowToReachUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToReachUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToReachUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
