import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from '../models/contato.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('formContato') formContato!: NgForm;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  SalvarForm(dataForm: Contato) {
    console.log(dataForm.firstName, dataForm.lastName, dataForm.email);
    this.formContato.resetForm();
    this.router.navigate(['/obrigado']);
  }
}
