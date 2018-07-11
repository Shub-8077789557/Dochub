import { TestBed, inject } from '@angular/core/testing';

import { UpdateNewsletterService } from './update-newsletter.service';

describe('UpdateNewsletterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateNewsletterService]
    });
  });

  it('should be created', inject([UpdateNewsletterService], (service: UpdateNewsletterService) => {
    expect(service).toBeTruthy();
  }));
});
