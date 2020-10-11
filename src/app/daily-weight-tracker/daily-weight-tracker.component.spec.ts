import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWeightTrackerComponent } from './daily-weight-tracker.component';

describe('DailyWeightTrackerComponent', () => {
  let component: DailyWeightTrackerComponent;
  let fixture: ComponentFixture<DailyWeightTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyWeightTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWeightTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
