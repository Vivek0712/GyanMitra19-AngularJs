import { TestBed } from '@angular/core/testing';

import { ParticipationstatusService } from './participationstatus.service';

describe('ParticipationstatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipationstatusService = TestBed.get(ParticipationstatusService);
    expect(service).toBeTruthy();
  });
});
