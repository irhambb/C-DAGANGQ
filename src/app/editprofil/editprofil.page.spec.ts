import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilPage } from './editprofil.page';

describe('EditprofilPage', () => {
  let component: EditprofilPage;
  let fixture: ComponentFixture<EditprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
