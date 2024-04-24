import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IResponse } from '../interface/IResponse';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  private apiUrl = 'http://localhost:8080/api/tipo-cambio';

  constructor(
    private http: HttpClient
  ) { }

  generarToken(): Observable<IResponse> {
    return this.http.post<IResponse>(this.apiUrl + '/generar-token', {})
      .pipe(
        map(r => { return r; })
      );
  }

  consultarTipoCambio(request: any): Observable<IResponse> {
    return this.http.post<IResponse>(this.apiUrl + '/calcular', request)
      .pipe(
        map(r => { return r; })
      );
  }

  listarCambios(): Observable<IResponse> {
    return this.http.get<IResponse>(this.apiUrl + '/listar')
      .pipe(
        map(r => { return r; })
      );
  }

}