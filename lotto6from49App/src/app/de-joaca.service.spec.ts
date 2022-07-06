import { TestBed } from '@angular/core/testing';

import { DeJoacaService } from './de-joaca.service';

describe('DeJoacaService', () => {
  let service: DeJoacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeJoacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
