import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  // fetch data from imported NewTicketComponent file
  onAdd(ticketData: {title: string; text: string}) {
    const ticket: Ticket = {
      // id: this.tickets.length + 1,
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(id:string){
    // this.tickets = this.tickets.filter(ticket => ticket.id !== id);
    // const index = this.tickets.findIndex(ticket => ticket.id === id);
    // this.tickets.splice(index, 1);
    
    // map is a default method built into JavaScript.
    // It takes a function that will be executed
    // for every element in that array,
    // and it will get that element
    // as an argument then automatically.
    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === id){
        // "..." is a javascript spread operator  I'm using it here to create a new object into which I copy and paste
        // all the existing key-value pairs, but I'm then overriding the status key.
        return {...ticket, status: 'closed'};
      }
      return ticket;
    });
  }
}
