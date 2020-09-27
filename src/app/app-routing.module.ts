import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DailyWeightTrackerComponent } from './daily-weight-tracker/daily-weight-tracker.component';
import { WeightListComponent } from './daily-weight-tracker/weight-list/weight-list.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'create', component: DailyWeightTrackerComponent },
	{ path: 'edit/:dayId', component: DailyWeightTrackerComponent },
	{ path: 'display', component: WeightListComponent },
	{ path: 'auth', component: AuthComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: []
})
export class AppRoutingModule {}
