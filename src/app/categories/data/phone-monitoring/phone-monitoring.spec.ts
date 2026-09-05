import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMonitoring } from './phone-monitoring';

describe('PhoneMonitoring', () => {
  let component: PhoneMonitoring;
  let fixture: ComponentFixture<PhoneMonitoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneMonitoring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneMonitoring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
