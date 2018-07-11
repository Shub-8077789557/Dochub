import { TestBed, inject } from '@angular/core/testing';

import { NewsletterstoreService } from './newsletterstore.service';

describe('NewsletterstoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsletterstoreService]
    });
  });

  it('should be created', inject([NewsletterstoreService], (service: NewsletterstoreService) => {
    expect(service).toBeTruthy();
  }));
});
