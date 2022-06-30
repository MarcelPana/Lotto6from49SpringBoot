import { TestBed } from '@angular/core/testing';

import { ExtractedNumbersServiceService } from './extracted-numbers-service.service';

describe('ExtractedNumbersServiceService', () => {
  let service: ExtractedNumbersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractedNumbersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
