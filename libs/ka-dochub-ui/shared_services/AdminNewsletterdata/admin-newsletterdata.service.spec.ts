import { TestBed, inject } from '@angular/core/testing';

import { AdminNewsletterdataService } from './admin-newsletterdata.service';

describe('AdminNewsletterdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminNewsletterdataService]
    });
  });

  it('should be created', inject([AdminNewsletterdataService], (service: AdminNewsletterdataService) => {
    expect(service).toBeTruthy();
  }));
});
