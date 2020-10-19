import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';

import { Weight } from './daily-weight-tracker.model';
import * as UI from '../shared/ui.actions';
import * as Weighing from './daily-weight-tracker.actions';
import * as fromWeighing from './daily-weight-tracker.reducer';
import { Observable } from 'rxjs';


@Injectable()
export class DailyWeightTrackerService {
	private fbSubs: Subscription[] = [];
	_db: AngularFirestore;
	weighIn: Observable<any[]>;
	isLoading = false;

	constructor(
		private db: AngularFirestore,
		private uiService: UIService,
		private store: Store<fromWeighing.State>,
		private router: Router
	) {
		this.weighIn = db.collection('dailyWeighIns').valueChanges();
		this._db = db;
	}

	fetchAvailableWeighIns() {
		this.store.dispatch(new UI.StartLoading());
		this.fbSubs.push(
			this.db
				.collection('dailyWeighIns')
				.snapshotChanges()
				.map((docArray) => {
					return docArray.map((doc) => {
						return {
							id: doc.payload.doc.id,
							date: doc.payload.doc.data()['date'],
							weight: doc.payload.doc.data()['weight'],

						};
					});
				})
				.subscribe(
					(weights: Weight[]) => {
						this.store.dispatch(new UI.StopLoading());
						this.store.dispatch(new Weighing.SetWeighIns(weights));
					},
					(error) => {
						this.store.dispatch(new UI.StopLoading());
						this.uiService.showSnackbar('Fetching Weigh-Ins Failed, Try again', null, 3000);
					}
				)
		);
	}

	cancelSubscriptions() {
		this.fbSubs.forEach((sub) => sub.unsubscribe());
	}


	addweighIns(enteredDate: string, enteredWeight: string) {
		this.isLoading = true;
		this.db.collection<Weight>('dailyWeighIns').add({ id: null, date: enteredDate, weight: enteredWeight });
	}

	deleteweighIns(deleteId: string) {
		this.isLoading = true;
		this._db.collection('dailyWeighIns').doc("deleteId").delete().then(function () {
			console.log("Document successfully deleted!");
			console.log(deleteId);
		})
	}
}
