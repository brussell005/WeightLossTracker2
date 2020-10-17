import { DailyWeightTrackerService } from './daily-weight-tracker.service';
import { Store } from '@ngrx/store';
import * as fromWeighing from './daily-weight-tracker.reducer';
import { Weight } from './daily-weight-tracker.model';
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
import * as Weighing from './daily-weight-tracker.actions';
import { FormControl, FormGroup } from "@angular/forms";


@Component({
	selector: 'app-daily-weight-tracker',
	templateUrl: './daily-weight-tracker.component.html',
	styleUrls: ['./daily-weight-tracker.component.scss']
})
export class DailyWeightTrackerComponent implements OnInit {
	private fbSubs: Subscription[] = [];
	_db: AngularFirestore;
	weighIn: Observable<any[]>;
	enteredDate = '';
	enteredWeight = '';
	deleteId = '';
	weighInId: string;
	weight: Weight;
	isLoading = false;
	displayedColumns = ['date', 'weight', 'id'];
	dataSource = new MatTableDataSource<Weight>();
	private weighInsSub: Subscription;


	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(
		private dailyweighttrackerservice: DailyWeightTrackerService,
		private store: Store<fromWeighing.State>,
		private db: AngularFirestore,
		private uiService: UIService
	) {
		this.weighIn = db.collection('dailyWeighIns').valueChanges();
		this._db = db;
	}

	ngOnInit() {
		this.store.select(fromWeighing.getdailyWeighIns).subscribe((weighIns: Weight[]) => {
			this.dataSource.data = weighIns;
		});
		this.dailyweighttrackerservice.fetchAvailableWeighIns();
	}

	onSaveWeightEntry() {
		this.isLoading = true;
		this.dailyweighttrackerservice.addweighIns(this.enteredDate, this.enteredWeight);
		this.isLoading = false;
	}
	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	onDeleteEntry() {
		this.isLoading = true;
		this.dailyweighttrackerservice.deleteweighIns(this.deleteId);
	}


	doFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
