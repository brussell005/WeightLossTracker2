import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: [ './auth.component.scss' ]
})
export class AuthComponent implements OnInit {
	isLoginMode = true;
	isLoading = false;

	onSwitchMode() {
		this.isLoginMode = !this.isLoginMode;
	}

	constructor(public authService: AuthService) {}

	onSubmit(form: NgForm) {
		if (form.invalid) {
			return;
		} else if (this.isLoginMode == false) {
			this.isLoading = true;
			this.authService.createUser(form.value.email, form.value.password);
			form.reset();
		} else {
			this.isLoading = true;
			this.authService.login(form.value.email, form.value.password);
			form.reset();
		}
	}

	ngOnInit(): void {}
}
