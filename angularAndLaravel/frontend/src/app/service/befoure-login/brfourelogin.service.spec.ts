import { TestBed } from '@angular/core/testing';

import { BrfoureloginService } from './brfourelogin.service';

describe('BrfoureloginService', () => {
  let service: BrfoureloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrfoureloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
