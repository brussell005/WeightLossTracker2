import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCalorieTrackerComponent } from './daily-calorie-tracker.component';

describe('DailyWeightTrackerComponent', () => {
    let component: DailyCalorieTrackerComponent;
    let fixture: ComponentFixture<DailyCalorieTrackerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DailyCalorieTrackerComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DailyCalorieTrackerComponent);
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
        expect(component.caloriesIn).toBe('Observable<any[]>');
    });

    it('should have a enteredDate', () => {
        expect(component.enteredDate).toBe('');
    });

    it('should have a enteredWeight', () => {
        expect(component.enteredCalories).toBe('');
    });

    it('should have a deleteId', () => {
        expect(component.deleteId).toBe('');
    });

    it('should have a calories', () => {
        expect(component.calories).toBe('Calories');
    });

    it('should have a displayedColumns', () => {
        const displayedColumns = ['date', 'calories', 'id'];
        expect(component.displayedColumns).toBe('displayedColumns');
    });

    it('should have a dataSource', () => {
        expect(component.dataSource).toBe('MatTableDataSource<Calories>()');
    });
});
