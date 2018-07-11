import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnewsletterDataComponent } from './adminnewsletter-data.component';

describe('AdminnewsletterDataComponent', () => {
  let component: AdminnewsletterDataComponent;
  let fixture: ComponentFixture<AdminnewsletterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnewsletterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnewsletterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
