import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-info-box',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './info-box.component.html',
	styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
	@Input() status = '';
	@Input() title = 'Info Box';
	@Input() body = '(watch this space...)';

	color = '';

	ngOnInit() {
		this.color = this.status === 'danger' ? 'red' : 'lightgreen';
	}
}

