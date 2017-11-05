import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'car-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent {
	constructor(private router: Router) {}
	
	@Input() car;
	
	editDetail(id) {
		this.router.navigate(['/edit', id]);
	}
}
