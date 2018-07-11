import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateNewsletterComponent } from './duplicate-newsletter.component';

describe('DuplicateNewsletterComponent', () => {
  let component: DuplicateNewsletterComponent;
  let fixture: ComponentFixture<DuplicateNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
