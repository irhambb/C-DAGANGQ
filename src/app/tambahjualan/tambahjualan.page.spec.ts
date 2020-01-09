import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahjualanPage } from './tambahjualan.page';

describe('TambahjualanPage', () => {
  let component: TambahjualanPage;
  let fixture: ComponentFixture<TambahjualanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahjualanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahjualanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
