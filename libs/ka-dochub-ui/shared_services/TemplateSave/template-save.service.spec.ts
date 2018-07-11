import { TestBed, inject } from '@angular/core/testing';

import { TemplateSaveService } from './template-save.service';

describe('TemplateSaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateSaveService]
    });
  });

  it('should be created', inject([TemplateSaveService], (service: TemplateSaveService) => {
    expect(service).toBeTruthy();
  }));
});
