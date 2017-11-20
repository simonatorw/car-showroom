import { Component } from '@angular/core';

import { DataService } from './utils/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = this.dataService.getTitle();
	
	constructor(private dataService: DataService) {}
}
