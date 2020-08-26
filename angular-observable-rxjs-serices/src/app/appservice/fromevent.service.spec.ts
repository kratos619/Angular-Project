import { TestBed } from '@angular/core/testing';

import { FromeventService } from './fromevent.service';

describe('FromeventService', () => {
  let service: FromeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FromeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
