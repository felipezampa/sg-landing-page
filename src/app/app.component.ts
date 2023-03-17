import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contato } from './contato.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('formContato') formContato!: NgForm;
  constructor(){}

  SalvarForm(dataForm: Contato) {
    console.log(dataForm.firstName, dataForm.lastName, dataForm.email);
    this.formContato.resetForm();
    alert("Um email foi enviado para: " + dataForm.email)
  }

}