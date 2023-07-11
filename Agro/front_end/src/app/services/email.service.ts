import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseURL = 'https://web-production-2969.up.railway.app/landing_page/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application' });

  constructor(private http: HttpClient) { }

  create(value: Contato): Observable<Contato | any> {
    // Retorna um Observable apos executar o metodo POST
    return this.http.post(this.baseURL, value);
  }
}
