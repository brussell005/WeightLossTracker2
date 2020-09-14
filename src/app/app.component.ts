import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuth } from './store';
import { ApplicationState } from './store/application-state.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	isAuth$: Observable<boolean>;
	constructor(private store$: Store<ApplicationState>) {}

	ngOnInit(): void {
		this.isAuth$ = this.store$.pipe(select(selectIsAuth));
	}
}
