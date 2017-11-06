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
	ids = [];
	
	getList(): Car[] {
		return this.carList;
	}
	getCar(id): Promise<Car> {
		return Promise.resolve(this.carList.find(car => car.id === id));
	}
	deleteCar(id): void {
		const indx = this.carList.findIndex(item => item.id === id);
		
		this.ids.push(this.carList[indx].id);
		this.carList.splice(indx, 1);
	}
	addCar(name): void {
		this.carList.push({
			id: this.ids.length ? this.ids.pop() : this.carList.length + 1,
			name
		});
		this.carList.sort((a, b) => a.id - b.id);
	}
}

