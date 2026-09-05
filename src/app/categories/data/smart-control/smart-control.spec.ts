import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartControl } from './smart-control';

describe('SmartControl', () => {
  let component: SmartControl;
  let fixture: ComponentFixture<SmartControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
