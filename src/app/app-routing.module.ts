import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/DashboardComponent/dashboard.component';
import { ListComponent } from './components/ListComponent/list.component';
import { EditComponent } from './components/EditComponent/edit.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'edit/:id', component: EditComponent },
	{ path: 'inventory',     component: ListComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}