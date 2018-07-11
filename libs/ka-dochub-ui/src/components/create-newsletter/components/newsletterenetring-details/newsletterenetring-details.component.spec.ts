import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterenetringDetailsComponent } from './newsletterenetring-details.component';

describe('NewsletterenetringDetailsComponent', () => {
  let component: NewsletterenetringDetailsComponent;
  let fixture: ComponentFixture<NewsletterenetringDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterenetringDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterenetringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
