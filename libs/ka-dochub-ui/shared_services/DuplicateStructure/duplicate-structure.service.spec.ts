import { TestBed, inject } from '@angular/core/testing';

import { DuplicateStructureService } from './duplicate-structure.service';

describe('DuplicateStructureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DuplicateStructureService]
    });
  });

  it('should be created', inject([DuplicateStructureService], (service: DuplicateStructureService) => {
    expect(service).toBeTruthy();
  }));
});
