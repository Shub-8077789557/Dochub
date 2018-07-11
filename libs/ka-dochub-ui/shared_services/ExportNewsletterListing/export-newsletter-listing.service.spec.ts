import { TestBed, inject } from '@angular/core/testing';

import { ExportNewsletterListingService } from './export-newsletter-listing.service';

describe('ExportNewsletterListingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExportNewsletterListingService]
    });
  });

  it('should be created', inject([ExportNewsletterListingService], (service: ExportNewsletterListingService) => {
    expect(service).toBeTruthy();
  }));
});
