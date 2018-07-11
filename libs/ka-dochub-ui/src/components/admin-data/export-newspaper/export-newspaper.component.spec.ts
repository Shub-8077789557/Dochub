import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportNewspaperComponent } from './export-newspaper.component';

describe('ExportNewspaperComponent', () => {
  let component: ExportNewspaperComponent;
  let fixture: ComponentFixture<ExportNewspaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportNewspaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportNewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
