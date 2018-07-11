import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnewsletterViewComponent } from './adminnewsletter-view.component';

describe('AdminnewsletterViewComponent', () => {
  let component: AdminnewsletterViewComponent;
  let fixture: ComponentFixture<AdminnewsletterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnewsletterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnewsletterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
