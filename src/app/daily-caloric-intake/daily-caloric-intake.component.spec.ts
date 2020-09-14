import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCaloricIntakeComponent } from './daily-caloric-intake.component';

describe('DailyCaloricIntakeComponent', () => {
  let component: DailyCaloricIntakeComponent;
  let fixture: ComponentFixture<DailyCaloricIntakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCaloricIntakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCaloricIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
