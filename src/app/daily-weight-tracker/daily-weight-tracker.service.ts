import { Injectable } from '@angular/core';
import { Weight } from './daily-weight-tracker.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class WeightTrackerService {
	private weighIns: Weight[] = [];
	private weighInsUpdated = new Subject<Weight[]>();

	constructor(private http: HttpClient, private router: Router) {}

	getweighIns() {
		this.http
			.get<{ message: string; weighIns: any }>('http://localhost:3000/api/posts')
			.pipe(
				map((postData) => {
					return postData.weighIns.map((weighIns) => {
						return {
							date: weighIns.date,
							weight: weighIns.weight,
							id: weighIns._id
						};
					});
				})
			)
			.subscribe((transformedWeighIns) => {
				this.weighIns = transformedWeighIns;
				this.weighInsUpdated.next([ ...this.weighIns ]);
			});
	}

	getWeighInsUpdateListener() {
		return this.weighInsUpdated.asObservable();
	}

	getWeighIn(id: string) {
		return { ...this.weighIns.find((weight) => weight.id === id) };
	}

	addweighIns(date: string, weight: string) {
		const weighIn: Weight = { id: null, date: date, weight: weight };
		this.http
			.post<{ message: string; weighInId: string }>('http://localhost:3000/api/posts', weighIn)
			.subscribe((responseData) => {
				const id = responseData.weighInId;
				weighIn.id = id;
				this.weighIns.push(weighIn);
				this.weighInsUpdated.next([ ...this.weighIns ]);
				this.router.navigate([ '/display' ]);
			});
	}

	updateweighIns(id: string, date: string, weight: string) {
		const weighIn: Weight = { id: id, date: date, weight: weight };
		this.http.put('http://localhost:3000/api/posts/' + id, weighIn).subscribe((response) => console.log(response));
		this.router.navigate([ '/display' ]);
	}

	deleteweighIns(weighInsId: string) {
		this.http.delete('http://localhost:3000/api/posts/' + weighInsId).subscribe(() => {
			const updatedWeighIns = this.weighIns.filter((weighIns) => weighIns.id !== weighInsId);
			this.weighIns = updatedWeighIns;
			this.weighInsUpdated.next([ ...this.weighIns ]);
		});
	}
}
