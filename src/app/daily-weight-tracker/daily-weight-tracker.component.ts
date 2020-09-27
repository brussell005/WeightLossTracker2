import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Weight } from './daily-weight-tracker.model';
import { WeightTrackerService } from './daily-weight-tracker.service';

@Component({
	selector: 'app-daily-weight-tracker',
	templateUrl: './daily-weight-tracker.component.html',
	styleUrls: [ './daily-weight-tracker.component.scss' ]
})
export class DailyWeightTrackerComponent implements OnInit {
	enteredDate = '';
	enteredWeight = '';
	private mode = 'create';
	weighInId: string;
	weight: Weight;
	isLoading = false;

	constructor(public weightTrackerService: WeightTrackerService, public route: ActivatedRoute) {}

	ngOnInit() {
		this.route.paramMap.subscribe((paramMap: ParamMap) => {
			if (paramMap.has('dayId')) {
				this.mode = 'edit';
				this.weighInId = paramMap.get('dayId');
				this.isLoading = true;
				this.weight = this.weightTrackerService.getWeighIn(this.weighInId);
				this.isLoading = false;
			} else {
				this.mode = 'create';
				this.weighInId = null;
			}
		});
	}

	onSaveWeightEntry() {
		this.isLoading = true;
		if (this.mode === 'create') {
			this.weightTrackerService.addweighIns(this.enteredDate, this.enteredWeight);
		} else {
			this.weightTrackerService.updateweighIns(this.weighInId, this.enteredDate, this.enteredWeight);
		}
	}
}
