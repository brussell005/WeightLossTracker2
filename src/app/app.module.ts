import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DailyWeightTrackerComponent } from './daily-weight-tracker/daily-weight-tracker.component';
import { DailyCaloricIntakeComponent } from './daily-caloric-intake/daily-caloric-intake.component';
import { ExerciseTrackerComponent } from './exercise-tracker/exercise-tracker.component';
import { NgrxModule } from './ngrx.module';
import { LoginModule } from './login/login.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		DailyWeightTrackerComponent,
		DailyCaloricIntakeComponent,
		ExerciseTrackerComponent
	],
	imports: [ BrowserModule, NgbModule, NgrxModule, LoginModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
