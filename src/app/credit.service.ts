import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientDTO } from './dtos/client-dto';
import { CreditDTO } from './dtos/credit-dto';
import { RemboursementDTO } from './dtos/remboursement-dto';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private apiUrl = 'http://localhost:8085/api/credits';

  constructor(private http: HttpClient) { }

  getClients(): Observable<ClientDTO[]> {
    return this.http.get<ClientDTO[]>(`${this.apiUrl}/clients`);
  }

  getCreditsByClient(clientId: number): Observable<CreditDTO[]> {
    return this.http.get<CreditDTO[]>(`${this.apiUrl}/clients/${clientId}`);
  }

  getRemboursementsByCredit(creditId: number): Observable<RemboursementDTO[]> {
    return this.http.get<RemboursementDTO[]>(`${this.apiUrl}/${creditId}/remboursements`);
  }

  createClient(client: ClientDTO): Observable<ClientDTO> {
    return this.http.post<ClientDTO>(`${this.apiUrl}/clients`, client);
  }

  createCredit(credit: CreditDTO): Observable<CreditDTO> {
    return this.http.post<CreditDTO>(`${this.apiUrl}`, credit);
  }

  createRemboursement(remboursement: RemboursementDTO): Observable<RemboursementDTO> {
    return this.http.post<RemboursementDTO>(`${this.apiUrl}/remboursements`, remboursement);
  }
}
