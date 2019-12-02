import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokasihidupmatiPage } from './lokasihidupmati.page';

describe('LokasihidupmatiPage', () => {
  let component: LokasihidupmatiPage;
  let fixture: ComponentFixture<LokasihidupmatiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokasihidupmatiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokasihidupmatiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
