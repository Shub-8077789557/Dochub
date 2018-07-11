import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateStructureComponent } from './duplicate-structure.component';

describe('DuplicateStructureComponent', () => {
  let component: DuplicateStructureComponent;
  let fixture: ComponentFixture<DuplicateStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
