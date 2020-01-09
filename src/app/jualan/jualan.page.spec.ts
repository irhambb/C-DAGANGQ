import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JualanPage } from './jualan.page';

describe('JualanPage', () => {
  let component: JualanPage;
  let fixture: ComponentFixture<JualanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JualanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
