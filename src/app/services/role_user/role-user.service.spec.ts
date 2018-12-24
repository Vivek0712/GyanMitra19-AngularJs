import { TestBed } from '@angular/core/testing';

import { RoleUserService } from './role-user.service';

describe('RoleUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleUserService = TestBed.get(RoleUserService);
    expect(service).toBeTruthy();
  });
});
