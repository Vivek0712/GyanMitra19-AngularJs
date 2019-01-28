import { TestBed } from '@angular/core/testing';

import { ReportserviceService } from './reportservice.service';

describe('ReportserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportserviceService = TestBed.get(ReportserviceService);
    expect(service).toBeTruthy();
  });
});
