import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumtonamePipe } from "../../shared/numtoname.pipe";

@Component({
	selector: 'app-info-box',
	standalone: true,
	imports: [CommonModule, NumtonamePipe],
	templateUrl: './info-box.component.html',
	styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
	@Input() status = '';
	@Input() title = 'Info Box';
	@Input() highlight = '';
	@Input() body = '(watch this space...)';

	color = '';
	showDevInfo = false;
	isHighlighted = false;

	ngOnInit() {
		this.color =
			this.status === 'danger'
				? 'tomato'
				: this.status === 'success'
				? 'lightgreen'
				: '#222';
		this.isHighlighted = this.highlight === 'true';
	}

	handleDevInfoButtonClick = () => {
		this.showDevInfo = !this.showDevInfo;
		console.log(`button for info-box "${this.title}" clicked`);
	};
}
