import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DailyWeightTrackerComponent } from './daily-weight-tracker.component';


const routes: Routes = [{ path: '', component: DailyWeightTrackerComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DailyWeightTrackerRoutingModule { }
