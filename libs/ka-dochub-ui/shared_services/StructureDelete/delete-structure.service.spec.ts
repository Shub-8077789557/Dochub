import { TestBed, inject } from '@angular/core/testing';

import { DeleteStructureService } from './delete-structure.service';

describe('DeleteStructureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteStructureService]
    });
  });

  it('should be created', inject([DeleteStructureService], (service: DeleteStructureService) => {
    expect(service).toBeTruthy();
  }));
});
