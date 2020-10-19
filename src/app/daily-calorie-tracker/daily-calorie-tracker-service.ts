import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';

import { Calories } from './daily-calorie-tracker.model';
import * as UI from '../shared/ui.actions';
import * as Counting from './daily-calorie-tracker.actions';
import * as fromCounting from './daily-calorie-tracker.reducer';
import { Observable } from 'rxjs';


@Injectable()
export class DailyCalorieTrackerService {
    private fbSubs: Subscription[] = [];
    _db: AngularFirestore;
    calorieIn: Observable<any[]>;
    isLoading = false;

    constructor(
        private db: AngularFirestore,
        private uiService: UIService,
        private store: Store<fromCounting.State>,
        private router: Router
    ) {
        this.calorieIn = db.collection('dailyCaloriesIn').valueChanges();
        this._db = db;
    }

    fetchAvailableCaloriesIns() {
        this.store.dispatch(new UI.StartLoading());
        this.fbSubs.push(
            this.db
                .collection('dailyCaloriesIn')
                .snapshotChanges()
                .map((docArray) => {
                    return docArray.map((doc) => {
                        return {
                            id: doc.payload.doc.id,
                            date: doc.payload.doc.data()['date'],
                            calories: doc.payload.doc.data()['calories'],

                        };
                    });
                })
                .subscribe(
                    (calories: Calories[]) => {
                        this.store.dispatch(new UI.StopLoading());
                        this.store.dispatch(new Counting.SetCaloriesIn(calories));
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


    addcaloriesIns(enteredDate: string, enteredCalories: string) {
        this.isLoading = true;
        this.db.collection<Calories>('dailyCaloriesIn').add({ id: null, date: enteredDate, calories: enteredCalories }).then(function (docRef) {
            console.log(docRef.id);
        });
    }

    deletecaloriesIns(deleteId: string) {
        this.isLoading = true;
        this.db.collection('dailyCaloriesIn').doc(deleteId).delete().then(function () {
            console.log("Document successfully deleted!");
            console.log(deleteId);
        })
    }
}
