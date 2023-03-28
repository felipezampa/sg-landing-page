import { Injectable } from '@angular/core';
import { Contato } from '../models/contato.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private contato: Contato[] = [];
  private baseURL = 'http://127.0.0.1:8000/landing_page/';
  private _refreshPage$ = new Subject<void>();
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application' });

  constructor(private http: HttpClient) { }

  get refreshPage$() {
    return this._refreshPage$;
  }

  list(): Observable<Contato[]> {
    // Retorna um Observable contendo todas as instancias da API
    return this.http.get<Contato[]>(this.baseURL, { headers: this.httpHeaders });
  }
  find(id: number): Observable<Contato> {
    //trazer os dados de uma unica instancia
    return this.http.get<Contato>(this.baseURL + '/' + id, { headers: this.httpHeaders });
  }
  create(value: Contato): Observable<Contato | any> {
    // Retorna um Observable apos executar o metodo POST
    return this.http.post(this.baseURL, value)
      // Essa parte abaixo é responsável por atualizar a página quando uma instancia for criada
      .pipe(
        tap(() => {
          this.refreshPage$.next();
        })
      );
  }
  update(id: number, value: Contato): Observable<Contato | any> {
    // Retorna um Observable apos executar o metodo PUT
    return this.http.put(this.baseURL + id + '/', value)
      // Essa parte abaixo é responsável por atualizar a página quando uma instancia for atualizada
      .pipe(
        tap(() => {
          this.refreshPage$.next();
        })
      );
  }
  delete(id: number) {
    //Deleta uma instancia da API
    return this.http.delete(this.baseURL + id + '/')
      // Essa parte abaixo é responsável por atualizar a página quando uma instancia for atualizada
      .pipe(
        tap(() => {
          this._refreshPage$.next();
        })
      );
  }
}
