import { TestBed, inject } from '@angular/core/testing';

import { EditStructureService } from './edit-structure.service';

describe('EditStructureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditStructureService]
    });
  });

  it('should be created', inject([EditStructureService], (service: EditStructureService) => {
    expect(service).toBeTruthy();
  }));
});
