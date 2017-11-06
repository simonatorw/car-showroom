import { Component, OnInit } from '@angular/core';

import { DataService } from '../../utils/data.service';

@Component({
	selector: 'inventory',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	title = 'Inventory';
	list;
	selectedCar;
	car = {
		name: ''
	};
	
	constructor(private dataService: DataService) {}
	
	ngOnInit() {
		this.list = this.dataService.getList();
	}
	
	onSelect(car) {
		this.selectedCar = car;
	}
	
	addCar(car, e) {
		e.preventDefault();
		
		this.dataService.addCar(car.name);
		car.name = '';
	}
}
