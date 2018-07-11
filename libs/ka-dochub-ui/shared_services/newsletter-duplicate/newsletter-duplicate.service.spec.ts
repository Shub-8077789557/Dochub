import { TestBed, inject } from '@angular/core/testing';

import { NewsletterDuplicateService } from './newsletter-duplicate.service';

describe('NewsletterDuplicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterDuplicateService]
    });
  });

  it('should be created', inject([NewsletterDuplicateService], (service: NewsletterDuplicateService) => {
    expect(service).toBeTruthy();
  }));
});
