import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe} from './utils/filter.pipe';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/DashboardComponent/dashboard.component';
import { ListComponent } from './components/ListComponent/list.component';
import { DetailComponent } from './components/DetailComponent/detail.component';
import { EditComponent } from './components/EditComponent/edit.component';
import { DataService } from './utils/data.service';
import { TitleService } from './utils/title.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		ListComponent,
		DetailComponent,
		EditComponent,
		FilterPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule
	],
	bootstrap: [AppComponent],
	providers: [DataService, TitleService]  
})
export class AppModule { }
