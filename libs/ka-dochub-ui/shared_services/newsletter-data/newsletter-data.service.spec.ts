import { TestBed, inject } from '@angular/core/testing';

import { NewsletterDataService } from './newsletter-data.service';

describe('NewsletterDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterDataService]
    });
  });

  it('should be created', inject([NewsletterDataService], (service: NewsletterDataService) => {
    expect(service).toBeTruthy();
  }));
});
