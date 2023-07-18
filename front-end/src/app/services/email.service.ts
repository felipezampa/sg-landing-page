import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '../APP_CONFIG';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseURL = APP_CONFIG.baseURL;
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application' });

  constructor(private http: HttpClient) { }

  create(value: Contato): Observable<Contato | any> {
    // Retorna um Observable apos executar o metodo POST
    return this.http.post(this.baseURL, value);
  }
}
