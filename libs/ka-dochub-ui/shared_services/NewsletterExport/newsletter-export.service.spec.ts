import { TestBed, inject } from '@angular/core/testing';

import { NewsletterExportService } from './newsletter-export.service';

describe('NewsletterExportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterExportService]
    });
  });

  it('should be created', inject([NewsletterExportService], (service: NewsletterExportService) => {
    expect(service).toBeTruthy();
  }));
});
