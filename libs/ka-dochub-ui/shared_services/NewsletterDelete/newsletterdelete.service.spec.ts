import { TestBed, inject } from '@angular/core/testing';

import { NewsletterdeleteService } from './newsletterdelete.service';

describe('NewsletterdeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterdeleteService]
    });
  });

  it('should be created', inject([NewsletterdeleteService], (service: NewsletterdeleteService) => {
    expect(service).toBeTruthy();
  }));
});
