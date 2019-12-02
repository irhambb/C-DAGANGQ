import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskripsikedaiPage } from './deskripsikedai.page';

describe('DeskripsikedaiPage', () => {
  let component: DeskripsikedaiPage;
  let fixture: ComponentFixture<DeskripsikedaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskripsikedaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskripsikedaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
