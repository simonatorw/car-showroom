import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Car } from './car';
import { TitleService } from './title.service';

@Injectable()
export class DataService {
	backupList: Car[] = [
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
	carList: Car[] = [];
	carsUrl = 'http://localhost:3000/cars';
	
	constructor(
		private titleService: TitleService,
		private http: HttpClient) {

		this.getXhrCarList();
	}
	getXhrCarList() {
		const obs = this.http.get<Car[]>(this.carsUrl);
		
		obs.subscribe(data => {
			data.forEach(data => this.carList.push(data));
			this.carList.sort((a, b) => a.id - b.id);
		}, err => this.backupList.forEach(data => this.carList.push(data)));		
	}
	postXhrCar(id, name) {
		this.http.post(this.carsUrl, {
			id,
			name
		}).subscribe(data => {
			if (data && data._id) {
				this.addId(data._id);
				console.log(data);
			}
		});
	}
	deleteXhrCar(id) {
		this.http.delete(`${this.carsUrl}/${id}`).subscribe();
	}
	putXhrCar(id, name) {
		this.http.put(`${this.carsUrl}/${id}`, {
			name
		}).subscribe();
	}	
	getList() {
		return this.carList;
	}
	getCar(id): Promise<Car> {
		return Promise.resolve(this.carList.find(car => car.id === id));
	}
	deleteCar(id): void {
		const indx = this.carList.findIndex(item => item.id === id);
		const dbIndx = this.carList[indx]._id;

		this.carList.splice(indx, 1);
		this.deleteXhrCar(dbIndx);
	}
	addId(id) {
		const item = this.carList.find(item => !item._id);
		item._id = id;
	}
	createId() {
		for(let i = 0; i < this.carList.length; i++) {
			if (this.carList[i].id !== i) {
				return i;
			}
		}
		return this.carList.length;
	}
	addCar(name): void {
		const id = this.createId();

		this.carList.push({
			id,
			name
		});
		this.carList.sort((a, b) => a.id - b.id);
		this.postXhrCar(id, name);
	}
	getTitle() {
		return this.titleService.getTitle();
	}
}