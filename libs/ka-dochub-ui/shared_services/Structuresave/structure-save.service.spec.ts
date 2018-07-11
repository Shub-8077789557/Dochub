import { TestBed, inject } from '@angular/core/testing';

import { StructureSaveService } from './structure-save.service';

describe('StructureSaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StructureSaveService]
    });
  });

  it('should be created', inject([StructureSaveService], (service: StructureSaveService) => {
    expect(service).toBeTruthy();
  }));
});
