import { TestBed } from '@angular/core/testing';

import { EmptyFormGuard } from './empty-form.guard';

describe('EmptyFormGuard', () => {
  let guard: EmptyFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmptyFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
