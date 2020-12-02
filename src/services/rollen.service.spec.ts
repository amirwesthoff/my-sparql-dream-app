import { TestBed } from '@angular/core/testing';

import { RollenService } from './rollen.service';

describe('RollenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RollenService = TestBed.get(RollenService);
    expect(service).toBeTruthy();
  });
});
