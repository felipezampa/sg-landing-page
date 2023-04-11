import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgroComponent, LandingPageComponent, ThankYouComponent } from './index';


@NgModule({
  declarations: [
    AgroComponent,
    LandingPageComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AgroModule { }
