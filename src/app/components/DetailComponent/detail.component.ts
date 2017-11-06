import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../utils/data.service';

@Component({
	selector: 'car-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent {
	constructor(
		private router: Router,
		private dataService: DataService
	) {}
	
	@Input() car;
	
	editDetail(id) {
		this.router.navigate(['/edit', id]);
	}
	deleteDetail(id) {
		this.dataService.deleteCar(id);
		this.car = null;
	}
}
