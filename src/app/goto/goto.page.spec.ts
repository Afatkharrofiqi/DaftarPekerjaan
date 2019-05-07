import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoPage } from './goto.page';

describe('GotoPage', () => {
  let component: GotoPage;
  let fixture: ComponentFixture<GotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
