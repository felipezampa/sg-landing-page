import { Component } from '@angular/core';
import { APP_CONFIG } from './APP_CONFIG';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageURL = APP_CONFIG.imageURL
}
