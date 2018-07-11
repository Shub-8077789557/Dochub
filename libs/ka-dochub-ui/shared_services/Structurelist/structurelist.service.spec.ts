import { TestBed, inject } from '@angular/core/testing';

import { StructurelistService } from './structurelist.service';

describe('StructurelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StructurelistService]
    });
  });

  it('should be created', inject([StructurelistService], (service: StructurelistService) => {
    expect(service).toBeTruthy();
  }));
});
