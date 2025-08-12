import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailVisible = signal(false)

  onToggleDetails(){
    // Whenever this method is triggered
    // and to set details visible to the opposite of what it was,
    // we can add an exclamation mark
    // in front of this details visible.
    // So that way we'll set it
    // to false if it was true and vice versa.
    // That's one way of updating this signal value.

    // this.detailVisible.set(!this.detailVisible());

    // OR usinthe the update() method
    this.detailVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
