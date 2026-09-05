import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTracker } from './hotel-tracker';

describe('HotelTracker', () => {
  let component: HotelTracker;
  let fixture: ComponentFixture<HotelTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
