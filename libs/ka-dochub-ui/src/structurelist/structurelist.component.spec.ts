import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurelistComponent } from './structurelist.component';

describe('StructurelistComponent', () => {
  let component: StructurelistComponent;
  let fixture: ComponentFixture<StructurelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructurelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructurelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
