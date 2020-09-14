import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state.model';
import { login } from '../store';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	constructor(private fb: FormBuilder, private store$: Store<ApplicationState>) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			username: '',
			password: ''
		});
	}

	submit() {
		console.log('submitted');
		this.store$.dispatch(login());
	}
}
