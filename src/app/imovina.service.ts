import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parcela, Vocnjak } from './models';

const url = 'http://hamza99-001-site1.etempurl.com'

@Injectable({
  providedIn: 'root'
})
export class ImovinaService {

  constructor(private http: HttpClient) { }

  getParcele() {
    return this.http.get<Parcela[]>(url+'/api/Parcelas/parc')
  }

  createParcela(parcela: Parcela) {
    return this.http.post<Parcela>(url+'/api/Parcelas/creatwe', parcela);
  }

  deleteParcela(id: number) {
    return this.http.delete(url+'/api/Parcelas/' + id)
  }

  dodajVocnjak(vocnjak: any) {
    return this.http.post(url+'/api/Vocnjaks', vocnjak);
  }
}
