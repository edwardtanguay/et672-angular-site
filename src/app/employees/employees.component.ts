import { Component } from '@angular/core';
import { IEmployee } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-employees',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './employees.component.html',
	styleUrl: './employees.component.scss',
})
export class EmployeesComponent {
	employees: IEmployee[] = [];

	constructor() {
		this.employees = [
			{
				firstName: 'Frank',
				lastName: 'Holander',
				notes: "These are Frank's notes.",
			},
			{
				firstName: 'Selma',
				lastName: 'Schmidt',
				notes: "These are Selma's notes.",
			},
		];
	}
}
