import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWeightTrackerComponent } from './daily-weight-tracker.component';

describe('DailyWeightTrackerComponent', () => {
  let component: DailyWeightTrackerComponent;
  let fixture: ComponentFixture<DailyWeightTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyWeightTrackerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWeightTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a database', () => {
    expect(component._db).toBe('AngularFirestore');
  });

  it('should load', () => {
    expect(component.isLoading).toBeFalse();
  });

  it('should have a weighIn', () => {
    expect(component.weighIn).toBe('Observable<any[]>');
  });

  it('should have a enteredDate', () => {
    expect(component.enteredDate).toBe('');
  });

  it('should have a enteredWeight', () => {
    expect(component.enteredWeight).toBe('');
  });

  it('should have a deleteId', () => {
    expect(component.deleteId).toBe('');
  });

  it('should have a weight', () => {
    expect(component.weight).toBe('Weight');
  });

  it('should have a displayedColumns', () => {
    const displayedColumns = ['date', 'weight', 'id'];
    expect(component.displayedColumns).toBe('displayedColumns');
  });

  it('should have a dataSource', () => {
    expect(component.dataSource).toBe('MatTableDataSource<Weight>()');
  });
});
