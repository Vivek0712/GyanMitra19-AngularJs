import { TestBed } from '@angular/core/testing';

import { ProbsService } from './probs.service';

describe('ProbsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProbsService = TestBed.get(ProbsService);
    expect(service).toBeTruthy();
  });
});
