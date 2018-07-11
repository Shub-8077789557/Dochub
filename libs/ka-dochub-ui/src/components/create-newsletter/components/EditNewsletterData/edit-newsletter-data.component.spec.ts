import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewsletterDataComponent } from './edit-newsletter-data.component';

describe('EditNewsletterDataComponent', () => {
  let component: EditNewsletterDataComponent;
  let fixture: ComponentFixture<EditNewsletterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewsletterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsletterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
