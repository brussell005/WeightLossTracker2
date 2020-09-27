import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../models/auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private isAuthenticated = false;
	private token: string;
	private authStatusListener = new Subject<boolean>();

	constructor(private http: HttpClient, private router: Router) {}

	getToken() {
		return this.token;
	}

	getIsAuth() {
		return this.isAuthenticated;
	}

	getAuthStatusListener() {
		return this.authStatusListener.asObservable();
	}

	createUser(email: string, password: string) {
		const authData: AuthData = { email: email, password: password };
		this.http.post('http://localhost:3000/api/user/signup', authData).subscribe((response) => {
			//console.log(response);
		});
	}

	login(email: string, password: string) {
		const authData: AuthData = { email: email, password: password };
		this.http.post<{ token: string }>('http://localhost:3000/api/user/login', authData).subscribe((response) => {
			console.log(response);
			const token = response.token;
			this.token = token;
			this.authStatusListener.next(true);
			const now = new Date();
			const expirationDate = new Date(now.getTime() + 360000);
			console.log(expirationDate);
			this.saveAuthData(token, expirationDate);
			this.router.navigate([ '/' ]);
		});
	}

	autoAuthUser() {
		const authInformation = this.getAuthData();
		if (!authInformation) {
			return;
		}
		const now = new Date();
		const isInFuture = authInformation.expirationDate > now;
		if (isInFuture) {
			this.token = authInformation.token;
			this.isAuthenticated = true;
			this.authStatusListener.next(true);
		}
	}

	logout() {
		this.token = null;
		this.isAuthenticated = false;
		this.authStatusListener.next(false);
		this.clearAuthData();
		this.router.navigate([ '/' ]);
	}

	private saveAuthData(token: string, expirationDate: Date) {
		localStorage.setItem('token', token);
		localStorage.setItem('expiration', expirationDate.toISOString());
	}

	private clearAuthData() {
		localStorage.removeItem('token');
		localStorage.removeItem('expiration');
	}

	private getAuthData() {
		const token = localStorage.getItem('token');
		const expirationDate = localStorage.getItem('expiration');
		if (!token || !expirationDate) {
			return;
		}
		return {
			token: token,
			expirationDate: new Date(expirationDate)
		};
	}
}