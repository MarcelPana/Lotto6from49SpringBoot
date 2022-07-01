import { TestBed } from '@angular/core/testing';

import { ExtractedNumbersService } from './extracted-numbers.service';

describe('ExtractedNumbersService', () => {
  let service: ExtractedNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtractedNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
