import { TestBed, inject } from '@angular/core/testing';

import { DuplicateTemplateService } from './duplicate-template.service';

describe('DuplicateTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DuplicateTemplateService]
    });
  });

  it('should be created', inject([DuplicateTemplateService], (service: DuplicateTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
