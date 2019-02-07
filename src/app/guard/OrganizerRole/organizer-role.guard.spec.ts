import { TestBed, async, inject } from '@angular/core/testing';

import { OrganizerRoleGuard } from './organizer-role.guard';

describe('OrganizerRoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizerRoleGuard]
    });
  });

  it('should ...', inject([OrganizerRoleGuard], (guard: OrganizerRoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
