import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DailyWeightTrackerComponent } from './daily-weight-tracker/daily-weight-tracker.component';
import { DailyCaloricIntakeComponent } from './daily-caloric-intake/daily-caloric-intake.component';
import { ExerciseTrackerComponent } from './exercise-tracker/exercise-tracker.component';
import { WeightListComponent } from './daily-weight-tracker/weight-list/weight-list.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/auth-interceptor';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		DailyWeightTrackerComponent,
		DailyCaloricIntakeComponent,
		ExerciseTrackerComponent,
		WeightListComponent,
		HomeComponent,
		AuthComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		NgbModule,
		FormsModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatToolbarModule,
		MatExpansionModule,
		MatProgressSpinnerModule,
		HttpClientModule
	],
	providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
