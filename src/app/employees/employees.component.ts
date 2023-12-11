import { Component } from '@angular/core';
import { IEmployee } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import axios from 'axios';

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
		(async () => {
			const rawEmployees = (
				await axios.get('https://edwardtanguay.vercel.app/share/employees.json')
			).data;

			rawEmployees.forEach((rawEmployee: any) => {
				this.employees.push({
					firstName: rawEmployee.firstName,
					lastName: rawEmployee.lastName,
					notes: rawEmployee.notes,
				});
			});
		})();
	}
}
