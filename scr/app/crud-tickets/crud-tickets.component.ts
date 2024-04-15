import { Component } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-tickets',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './crud-tickets.component.html',
  styleUrl: './crud-tickets.component.css',
  providers: [TicketService]
})
export class CrudTicketsComponent {
  showForm: boolean = false;
  editing: boolean = false;
  tickets: any[] = [];
  ticket: any = {};

  constructor(private ticketService: TicketService, private http: HttpClient) { }

  ngOnInit() {
    this.getTickets();
  }

  showAddForm() {
    this.showForm = true;
    this.editing = false;
    this.ticket = {}; // Reinicializa el objeto admin
  }

  cancelForm() {
    this.showForm = false;
  }

  submitForm() {
    if (this.editing) {
      this.ticketService.updateTicket(this.ticket).subscribe(
        () => {
          console.log('Boleto actualizado correctamente');
          // Actualizar la lista de boletos después de actualizar uno existente
          this.getTickets();
        },
        (error) => {
          console.error('Error al actualizar boleto:', error);
        }
      );
    } else {
      this.ticketService.addTicket(this.ticket).subscribe(
        () => {
          console.log('Ticket agregado correctamente');
          // Actualizar la lista de boletos después de agregar uno nuevo
          this.getTickets();
        },
        (error) => {
          console.error('Error al agregar boleto', error);
        }
      );
    }
  }

  getTickets() {
    this.ticketService.getTickets().subscribe(
      (tickets) => {
        this.tickets = tickets;
        console.log('Datos de boletos recuperados correctamente:', tickets);
      },
      (error) => {
        console.error('Error al obtener boletos:', error);
      }
    );
  }

  editTicket(ticket: any) {
    this.showForm = true;
    this.editing = true;
    this.ticket = { ...ticket };
  }

  deleteTicket(ticket: any) {
    if (confirm('¿Estás seguro de que quieres eliminar este boleto?')) {
      this.ticketService.deleteTicket(ticket.id_boleto).subscribe(
        () => {
          console.log('Boleto eliminado correctamente');
          this.getTickets();
        },
        (error) => {
          console.error('Error al eliminar boleto:', error);
        }
      );
    }
  }

}
