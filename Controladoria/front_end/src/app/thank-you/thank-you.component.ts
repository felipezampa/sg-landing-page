import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../APP_CONFIG';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  imageURL = APP_CONFIG.imageURL

  constructor() { }

  ngOnInit(): void {
  }

}
