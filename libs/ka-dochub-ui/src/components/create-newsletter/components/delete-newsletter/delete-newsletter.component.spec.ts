import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewsletterComponent } from './delete-newsletter.component';

describe('DeleteNewsletterComponent', () => {
  let component: DeleteNewsletterComponent;
  let fixture: ComponentFixture<DeleteNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
