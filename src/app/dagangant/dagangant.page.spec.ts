import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagangantPage } from './dagangant.page';

describe('DagangantPage', () => {
  let component: DagangantPage;
  let fixture: ComponentFixture<DagangantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagangantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagangantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
