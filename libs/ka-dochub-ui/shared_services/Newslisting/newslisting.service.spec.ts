import { TestBed, inject } from '@angular/core/testing';

import { NewslistingService } from './newslisting.service';

describe('NewslistingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewslistingService]
    });
  });

  it('should be created', inject([NewslistingService], (service: NewslistingService) => {
    expect(service).toBeTruthy();
  }));
});
