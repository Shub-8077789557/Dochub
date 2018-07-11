import { TestBed, inject } from '@angular/core/testing';

import { RoleupdationService } from './roleupdation.service';

describe('RoleupdationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleupdationService]
    });
  });

  it('should be created', inject([RoleupdationService], (service: RoleupdationService) => {
    expect(service).toBeTruthy();
  }));
});
