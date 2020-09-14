import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ HomeComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should have a div', () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.innerHTML).toContain("I'm logged in!");
	});

	it('should have a goalWeight', () => {
		expect(component.goalWeight).toBe('210');
	});

	it('should have a weighIns', () => {
		const weighIns = [
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
		expect(component.weighIns).toEqual(weighIns);
	});

	it('should have an exerciseList', () => {
		const exerciseList = [
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
		expect(component.exerciseList).toEqual(exerciseList);
	});

	it('should have an imgSrc', () => {
		expect(component.imgSrc).toBe('https://upload.wikimedia.org/wikipedia/en/7/7f/Nutty_professor_ver1.jpg');
	});

	it('should have alText', () => {
		expect(component.alText).toBe('Movie Poster');
	});
});
