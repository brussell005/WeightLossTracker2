import { NgModule } from '@angular/core';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
	declarations: [SignupComponent, LoginComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
		FlexLayoutModule,
		AngularFireAuthModule,
		AuthRoutingModule
	],
	exports: []
})
export class AuthModule { }
