import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from '../models/contato.model';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('formContato') formContato!: NgForm;
  @ViewChild('name', { static: true }) inputFocus!: ElementRef;
  SegmentoChoices: String[] = ['Comércio', 'Indústria', 'Serviços','Agricultura','Pecuária','Outros'];
  FaturamentoChoices: String[] = ['Ainda não faturamos', 'Até R$500 mil ao ano', 'De R$500 mil a R$1 milhão ao ano', 'De R$1 milhão a R$5 milhões ao ano', 'De R$5 a R$10 milhões ao ano', 'De R$10 a R$50 milhões ao ano', 'De R$50 a R$500 milhões ao ano', 'Acima de R$500 milhões'];
  CargoChoices: String[] = ['Analista', 'Supervisor', 'Coordenador', 'Gerente', 'Diretor', 'Vice-presidente ou C-Level', 'Presidente ou CEO', 'Sócio ou Fundador','Proprietário'];

  constructor(private router: Router, private emailService: EmailService) { }

  ngOnInit(): void { }

  SalvarForm(value: Contato) {
    this.emailService.create(value).subscribe();
    this.router.navigate(['/obrigado']);
  }

  FocusForm() {
    var meuInput = document.getElementById("inputFocus");
    meuInput?.focus();
  }
}
