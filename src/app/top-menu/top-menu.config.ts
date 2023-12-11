import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { InfoComponent } from '../info/info.component';
import { EmployeesComponent } from '../employees/employees.component';

export const routerConfig: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'info',
		component: InfoComponent,
	},
	{
		path: 'employees',
		component: EmployeesComponent,
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/home',
		pathMatch: 'full',
	},
];
