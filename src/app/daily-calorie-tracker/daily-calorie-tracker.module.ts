import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { DailyCalorieTrackerRoutingModule } from './daily-calorie-tracker-routing.module';
import { DailyCalorieTrackerComponent } from './daily-calorie-tracker.component';
import { StoreModule } from '@ngrx/store';
import { caloriesInReducer } from './daily-calorie-tracker.reducer';

@NgModule({
    declarations: [DailyCalorieTrackerComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        DailyCalorieTrackerRoutingModule,
        StoreModule.forFeature('counting', caloriesInReducer)
    ]
})
export class DailyCalorieTrackerModule { }
