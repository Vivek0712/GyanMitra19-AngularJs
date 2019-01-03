import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParticipantsTeamComponent } from './event-participants-team.component';

describe('EventParticipantsTeamComponent', () => {
  let component: EventParticipantsTeamComponent;
  let fixture: ComponentFixture<EventParticipantsTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventParticipantsTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventParticipantsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
