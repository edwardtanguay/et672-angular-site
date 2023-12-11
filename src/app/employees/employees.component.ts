import { Component } from '@angular/core';
import { IEmployee } from '../../shared/interfaces';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-employees',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './employees.component.html',
	styleUrl: './employees.component.scss',
})
export class EmployeesComponent {
	employees: IEmployee[] = [];
	searchText: string = '';

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

	employeeHasSearchText(emp: IEmployee): boolean {
		const bulkText = emp.firstName + '|' + emp.lastName + '|' + emp.notes;
		return bulkText.toLowerCase().includes(this.searchText.toLowerCase());
	}
}
