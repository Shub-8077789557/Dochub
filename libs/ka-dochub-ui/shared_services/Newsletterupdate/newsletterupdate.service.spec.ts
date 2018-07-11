import { TestBed, inject } from '@angular/core/testing';

import { NewsletterupdateService } from './newsletterupdate.service';

describe('NewsletterupdateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterupdateService]
    });
  });

  it('should be created', inject([NewsletterupdateService], (service: NewsletterupdateService) => {
    expect(service).toBeTruthy();
  }));
});
