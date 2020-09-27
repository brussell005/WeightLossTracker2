import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Weight } from '../daily-weight-tracker.model';
import { WeightTrackerService } from '../daily-weight-tracker.service';

@Component({
	selector: 'app-weight-list',
	templateUrl: './weight-list.component.html',
	styleUrls: [ './weight-list.component.scss' ]
})
export class WeightListComponent implements OnInit {
	goalWeight = '210';
	weighIns: Weight[] = [];
	private weighInsSub: Subscription;

	constructor(public weightTrackerService: WeightTrackerService) {}

	ngOnInit() {
		this.weightTrackerService.getweighIns();
		this.weighInsSub = this.weightTrackerService.getWeighInsUpdateListener().subscribe((weighIns: Weight[]) => {
			this.weighIns = weighIns;
		});
	}

	onDelete(dayId: string) {
		this.weightTrackerService.deleteweighIns(dayId);
	}
	ngOnDestroy() {
		this.weighInsSub.unsubscribe();
	}
}
