import { Injectable } from '@angular/core';

import { Car } from './car';

@Injectable()
export class DataService {
	carList: Car[] = [
		{ id: 1, name: 'Porsche C4S' },
		{ id: 2, name: 'Ferrari 458' },
		{ id: 3, name: 'Lamborghini LP-560' },
		{ id: 4, name: 'McLaren 720S' },
		{ id: 5, name: 'Nissan GT-R' },
		{ id: 6, name: 'Acura NSX' },
		{ id: 7, name: 'Chevrolet Corvette' },
		{ id: 8, name: 'Alfa Romero Giulia' },
		{ id: 9, name: 'Ford Mustang' },
		{ id: 10, name: 'Dodge Challenger' }
	];
	
	getList(): Car[] {
		return this.carList;
	}
	getCar(id): Promise<Car> {
		return Promise.resolve(this.carList.find(car => car.id === id));
	}
}

