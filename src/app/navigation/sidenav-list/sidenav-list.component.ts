import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';

@Component({
	selector: 'app-sidenav-list',
	templateUrl: './sidenav-list.component.html',
	styleUrls: [ './sidenav-list.component.scss' ]
})
export class SidenavListComponent implements OnInit {
	@Output() closeSidenav = new EventEmitter<void>();
	isAuth$: Observable<boolean>;
	authSubscription: Subscription;

	constructor(private authService: AuthService, private store: Store<fromRoot.State>) {}

	ngOnInit() {
		this.isAuth$ = this.store.select(fromRoot.getIsAuth);
	}

	onClose() {
		this.closeSidenav.emit();
	}

	onLogout() {
		this.onClose();
		this.authService.logout();
	}
}