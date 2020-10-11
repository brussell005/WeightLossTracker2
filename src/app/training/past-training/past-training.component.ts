import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromTraining from '../training.reducer';

@Component({
	selector: 'app-past-training',
	templateUrl: './past-training.component.html',
	styleUrls: [ './past-training.component.scss' ]
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
	displayedColumns = [ 'date', 'name', 'duration', 'calories', 'state' ];
	dataSource = new MatTableDataSource<Exercise>();
	private exChangedSubscription: Subscription;

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	constructor(private trainingService: TrainingService, private store: Store<fromTraining.State>) {}

	ngOnInit() {
		this.store.select(fromTraining.getFinishedExercises).subscribe((exercises: Exercise[]) => {
			this.dataSource.data = exercises;
		});
		this.trainingService.fetchCompletedOrCancelledExercises();
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
		this.dataSource.paginator = this.paginator;
	}

	doFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}