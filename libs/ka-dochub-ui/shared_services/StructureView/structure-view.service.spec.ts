import { TestBed, inject } from '@angular/core/testing';

import { StructureViewService } from './structure-view.service';

describe('StructureViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StructureViewService]
    });
  });

  it('should be created', inject([StructureViewService], (service: StructureViewService) => {
    expect(service).toBeTruthy();
  }));
});
