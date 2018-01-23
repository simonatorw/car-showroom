import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Car } from '../../utils/car';
import { DataService } from '../../utils/data.service';

@Component({
	selector: 'hero-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	car: Car;
	
	constructor(
		private dataService: DataService,
		private route: ActivatedRoute,
		private location: Location
	) {
		this.car = { id: 0, name: '' };
	}
	
	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.dataService.getCar(+params.get('id')))
			.subscribe(car => this.car = car);
	}

	updateCar(car) {
		this.dataService.putXhrCar(car._id, car.name);
	}

	goBack() {
		this.location.back();
	}
}