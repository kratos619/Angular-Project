import { TestBed } from '@angular/core/testing';

import { ProductDetailsGuardsGuard } from './product-details-guards.guard';

describe('ProductDetailsGuardsGuard', () => {
  let guard: ProductDetailsGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDetailsGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
