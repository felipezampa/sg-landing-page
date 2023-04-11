import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplateComponent, TemplateLPageComponent, TemplateThanksComponent } from './index';
import { EmailService } from '../shared';


@NgModule({
  declarations: [
    TemplateComponent,
    TemplateLPageComponent,
    TemplateThanksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    EmailService
  ]
})
export class TemplateModule { }
