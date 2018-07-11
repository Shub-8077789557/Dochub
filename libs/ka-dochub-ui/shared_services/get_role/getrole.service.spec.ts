import { TestBed, inject } from '@angular/core/testing';

import { GetroleService } from './getrole.service';

describe('GetroleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetroleService]
    });
  });

  it('should be created', inject([GetroleService], (service: GetroleService) => {
    expect(service).toBeTruthy();
  }));
});
