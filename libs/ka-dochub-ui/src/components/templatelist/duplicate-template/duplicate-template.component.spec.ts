import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateTemplateComponent } from './duplicate-template.component';

describe('DuplicateTemplateComponent', () => {
  let component: DuplicateTemplateComponent;
  let fixture: ComponentFixture<DuplicateTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
