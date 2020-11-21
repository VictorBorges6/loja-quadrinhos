import { TestBed } from '@angular/core/testing';

import { AbaService } from './aba.service';

describe('AbaService', () => {
  let service: AbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
