import { TestBed, inject } from '@angular/core/testing';

import { TemplatelistingService } from './templatelisting.service';

describe('TemplatelistingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplatelistingService]
    });
  });

  it('should be created', inject([TemplatelistingService], (service: TemplatelistingService) => {
    expect(service).toBeTruthy();
  }));
});
