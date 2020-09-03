import { TestBed } from '@angular/core/testing';

import { TokenHeaderInterceptor } from './headerInterceptor.service';

describe('AuthService', () => {
  let service: TokenHeaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenHeaderInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
