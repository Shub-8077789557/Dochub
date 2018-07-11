import { TestBed, inject } from '@angular/core/testing';

import { TemplateDeleteService } from './template-delete.service';

describe('TemplateDeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateDeleteService]
    });
  });

  it('should be created', inject([TemplateDeleteService], (service: TemplateDeleteService) => {
    expect(service).toBeTruthy();
  }));
});
