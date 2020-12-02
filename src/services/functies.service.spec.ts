import { TestBed } from '@angular/core/testing';

import { FunctiesService } from './functies.service';

describe('FunctiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctiesService = TestBed.get(FunctiesService);
    expect(service).toBeTruthy();
  });
});
