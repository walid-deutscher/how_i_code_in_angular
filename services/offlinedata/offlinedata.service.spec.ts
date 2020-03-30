import { TestBed } from '@angular/core/testing';

import { OfflinedataService } from './offlinedata.service';

describe('OfflinedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflinedataService = TestBed.get(OfflinedataService);
    expect(service).toBeTruthy();
  });
});
