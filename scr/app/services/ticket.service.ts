import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:3000/crud-tickets';

  constructor(private http: HttpClient) { }

  insertTicket(ticketData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ticketData).pipe(
      catchError(error => throwError('Error al agregar boleto: ' + error.message))
    );
  }

  // Método para obtener todos los boletos
  getTickets() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => throwError('Error al obtener boletos: ' + error.message))
    );
  }

  // Método para agregar un nuevo boleto
  addTicket(ticket: any): Observable<any> {
    window.location.reload();
    return this.http.post<any>(`${this.apiUrl}`, ticket);
  }

  // Método para actualizar un boleto existente
  updateTicket(ticket: any) {
    window.location.reload();
    return this.http.put(`${this.apiUrl}/${ticket.id_boleto}`, ticket).pipe(
      catchError(error => throwError('Error al actualizar boleto: ' + error.message))
    );
  }

  // Método para eliminar un boleto
  deleteTicket(id: number) {
    window.location.reload();
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(error => throwError('Error al eliminar boleto: ' + error.message))
    );
  }
}
