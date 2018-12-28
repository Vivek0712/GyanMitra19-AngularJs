import { TestBed } from '@angular/core/testing';

import { YearService } from './year.service';

describe('YearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YearService = TestBed.get(YearService);
    expect(service).toBeTruthy();
  });
});
