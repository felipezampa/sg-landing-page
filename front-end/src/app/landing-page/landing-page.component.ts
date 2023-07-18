import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from '../models/contato.model';
import { EmailService } from '../services/email.service';
import { NgForm } from '@angular/forms';
import { APP_CONFIG } from '../APP_CONFIG';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  imageURL = APP_CONFIG.imageURL
  @ViewChild('formContato') formContato!: NgForm;
  @ViewChild('name', { static: true }) inputFocus!: ElementRef;
  SegmentoChoices: String[] = ['Comércio', 'Indústria', 'Serviços'];
  FaturamentoChoices: String[] = ['Ainda não faturamos', 'Até R$500 mil ao ano', 'De R$500 mil a R$1 milhão ao ano', 'De R$1 milhão a R$5 milhões ao ano', 'De R$5 a R$10 milhões ao ano', 'De R$10 a R$50 milhões ao ano', 'De R$50 a R$500 milhões ao ano', 'Acima de R$500 milhões'];
  CargoChoices: String[] = ['Analista', 'Supervisor', 'Coordenador', 'Gerente', 'Diretor', 'Vice-presidente ou C-Level', 'Presidente ou CEO', 'Sócio ou Fundador'];

  constructor(private router: Router, private emailService: EmailService) { }

  ngOnInit(): void { }

  SalvarForm(value: Contato) {
    value.landing_origem = 'Controladoria - GUIA ESSENCIAL DE FORMAÇÃO DE PREÇO'
    this.emailService.create(value).subscribe();
    this.downloadPDF();
    this.router.navigate(['/obrigado']);
  }

  downloadPDF() {
    const pdfURL =  APP_CONFIG.pdfURL + '/E-book Guia Essencial da Formação de Preço Controladoria.pdf';
    const pdfFilename = 'E-book Guia Essencial da Formação de Preço Controladoria.pdf';
    
    fetch(pdfURL).then(res => res.blob())
      .then(blob => saveAs(blob, pdfFilename))
      .catch(error => console.error('Erro ao fazer download do PDF:', error));
  }

}
