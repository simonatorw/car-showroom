import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})

export class FilterPipe implements PipeTransform {
	transform(items: any[]): any[] {
		const length = items.length < 3 ? items.length: 3;
		console.log(items)
		return items.filter((it, i) => {
			return true;
		});
	}
}