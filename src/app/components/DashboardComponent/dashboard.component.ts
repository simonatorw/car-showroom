import { Component, OnInit } from '@angular/core';

import { DataService } from '../../utils/data.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	title = 'Dashboard';
	subtitle = 'Top 3 Cars';
	list;
	
	constructor(private dataService: DataService) {}
	
	ngOnInit(): void {
		this.list = this.dataService.getList();
	}
}
