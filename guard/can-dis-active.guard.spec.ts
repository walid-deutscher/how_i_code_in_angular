import { TestBed, async, inject } from '@angular/core/testing';

import { CanDisActiveGuard } from './can-dis-active.guard';

describe('CanDisActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDisActiveGuard]
    });
  });

  it('should ...', inject([CanDisActiveGuard], (guard: CanDisActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
