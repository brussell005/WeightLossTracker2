import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DailyCalorieTrackerComponent } from './daily-calorie-tracker.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [{ path: '', component: DailyCalorieTrackerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DailyCalorieTrackerRoutingModule { }