import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { DailyWeightTrackerRoutingModule } from './daily-weight-tracker-routing.module';
import { DailyWeightTrackerComponent } from './daily-weight-tracker.component';
import { StoreModule } from '@ngrx/store';
import { weighInReducer } from './daily-weight-tracker.reducer';

@NgModule({
	declarations: [ DailyWeightTrackerComponent ],
	imports: [
		CommonModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,

		DailyWeightTrackerRoutingModule,
		StoreModule.forFeature('weighing', weighInReducer)
	]
})
export class DailyWeightTrackerModule {}
