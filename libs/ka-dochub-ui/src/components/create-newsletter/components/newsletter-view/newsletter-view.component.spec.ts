import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterViewComponent } from './newsletter-view.component';

describe('NewsletterViewComponent', () => {
  let component: NewsletterViewComponent;
  let fixture: ComponentFixture<NewsletterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
