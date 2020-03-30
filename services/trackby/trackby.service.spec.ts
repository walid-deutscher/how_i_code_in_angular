import { TestBed } from '@angular/core/testing';

import { TrackbyService } from './trackby.service';

describe('TrackbyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackbyService = TestBed.get(TrackbyService);
    expect(service).toBeTruthy();
  });
});
