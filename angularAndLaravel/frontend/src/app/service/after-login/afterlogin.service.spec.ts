import { TestBed } from '@angular/core/testing';

import { AfterloginService } from './afterlogin.service';

describe('AfterloginService', () => {
  let service: AfterloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfterloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
