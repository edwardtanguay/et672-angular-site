import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InfoBoxComponent } from './info-box/info-box.component';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [CommonModule, RouterOutlet, InfoBoxComponent],
})
export class AppComponent {
	title = 'The Angular Site';
	message = 'Welcome to this site.';
}
