import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Contato } from '../../shared/models/contato.model';
import { EmailService } from 'src/app/shared/services/email.service';

@Component({
  selector: 'template-landing-page',
  templateUrl: './template-lpage.component.html',
  styleUrls: ['./template-lpage.component.css']
})
export class TemplateLPageComponent implements OnInit {

  @ViewChild('formContato') formContato!: NgForm;
  @ViewChild('name', { static: true }) inputFocus!: ElementRef;
  SegmentoChoices: String[] = ['Comércio', 'Indústria', 'Serviços'];
  FaturamentoChoices: String[] = ['Ainda não faturamos', 'Até R$500 mil ao ano', 'De R$500 mil a R$1 milhão ao ano', 'De R$1 milhão a R$5 milhões ao ano', 'De R$5 a R$10 milhões ao ano', 'De R$10 a R$50 milhões ao ano', 'De R$50 a R$500 milhões ao ano', 'Acima de R$500 milhões'];
  CargoChoices: String[] = ['Analista', 'Supervisor', 'Coordenador', 'Gerente', 'Diretor', 'Vice-presidente ou C-Level', 'Presidente ou CEO', 'Sócio ou Fundador'];

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
