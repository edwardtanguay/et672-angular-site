import { Component } from '@angular/core';
import { InfoBoxComponent } from "../info-box/info-box.component";

@Component({
    selector: 'app-info',
    standalone: true,
    templateUrl: './info.component.html',
    styleUrl: './info.component.scss',
    imports: [InfoBoxComponent]
})
export class InfoComponent {

}
