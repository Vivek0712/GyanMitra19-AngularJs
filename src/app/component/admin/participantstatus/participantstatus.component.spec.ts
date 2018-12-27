import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantstatusComponent } from './participantstatus.component';

describe('ParticipantstatusComponent', () => {
  let component: ParticipantstatusComponent;
  let fixture: ComponentFixture<ParticipantstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
