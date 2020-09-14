import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	goalWeight = '210';

	weighIns = [
		{
			date: '9/2/2020',
			weight: '320'
		},
		{
			date: '9/3/2020',
			weight: '320'
		},
		{
			date: '9/4/2020',
			weight: '319'
		},
		{
			date: '9/5/2020',
			weight: '317'
		}
	];

	exerciseList = [
		{
			exercise: 'Swimming',
			time: '30mins'
		},
		{
			exercise: 'Walking',
			time: '60mins'
		},
		{
			exercise: 'Volleyball',
			time: '5mins and 10mins lying down'
		}
	];

	imgSrc = 'https://upload.wikimedia.org/wikipedia/en/7/7f/Nutty_professor_ver1.jpg';
	alText = 'Movie Poster';

	ngOnInit(): void {}
}
