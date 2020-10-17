import { DailyCalorieTrackerService } from './daily-calorie-tracker-service';
import { Store } from '@ngrx/store';
import * as fromCounting from './daily-calorie-tracker.reducer';
import { Calories } from './daily-calorie-tracker.model';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { UIService } from '../shared/ui.service';
import { Subscription } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as UI from '../shared/ui.actions';
import * as Counting from './daily-calorie-tracker.actions';
import { FormControl, FormGroup } from "@angular/forms";


@Component({
    selector: 'app-daily-calorie-tracker',
    templateUrl: './daily-calorie-tracker.component.html',
    styleUrls: ['./daily-calorie-tracker.component.scss']
})
export class DailyCalorieTrackerComponent implements OnInit {
    private fbSubs: Subscription[] = [];
    _db: AngularFirestore;
    caloriesIn: Observable<any[]>;
    enteredDate = '';
    enteredCalories = '';
    deleteId = '';
    calorieInId: string;
    calories: Calories;
    isLoading = false;
    displayedColumns = ['date', 'calories', 'id'];
    dataSource = new MatTableDataSource<Calories>();
    private caloriesInsSub: Subscription;


    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private dailycalorietrackerservice: DailyCalorieTrackerService,
        private store: Store<fromCounting.State>,
        private db: AngularFirestore,
        private uiService: UIService
    ) {
        this.caloriesIn = db.collection('dailyCaloriesIn').valueChanges();
        this._db = db;
    }

    ngOnInit() {
        this.store.select(fromCounting.getdailyCaloriesIns).subscribe((caloriesIns: Calories[]) => {
            this.dataSource.data = caloriesIns;
        });
        this.dailycalorietrackerservice.fetchAvailableCaloriesIns();
    }

    onSaveWeightEntry() {
        this.isLoading = true;
        this.dailycalorietrackerservice.addcaloriesIns(this.enteredDate, this.enteredCalories);
        this.isLoading = false;
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    onDeleteEntry() {
        this.isLoading = true;
        this.dailycalorietrackerservice.deletecaloriesIns(this.deleteId);
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
