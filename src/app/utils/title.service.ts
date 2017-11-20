import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
	title = 'Car Place';
	
	getTitle() {
		return this.title;
	}
}

