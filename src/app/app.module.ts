import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/DashboardComponent/dashboard.component';
import { ListComponent } from './components/ListComponent/list.component';
import { DetailComponent } from './components/DetailComponent/detail.component';
import { EditComponent } from './components/EditComponent/edit.component';
import { DataService } from './utils/data.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		ListComponent,
		DetailComponent,
		EditComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	bootstrap: [AppComponent],
	providers: [DataService]  
})
export class AppModule { }
