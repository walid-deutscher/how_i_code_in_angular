import { TestBed, async, inject } from '@angular/core/testing';

import { CanActiveGuard } from './can-active.guard';

describe('CanActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActiveGuard]
    });
  });

  it('should ...', inject([CanActiveGuard], (guard: CanActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
