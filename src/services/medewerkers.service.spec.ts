import { TestBed } from '@angular/core/testing';

import { MedewerkersService } from './medewerkers.service';

describe('MedewerkersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedewerkersService = TestBed.get(MedewerkersService);
    expect(service).toBeTruthy();
  });
});
