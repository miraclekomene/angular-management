import { Component } from '@angular/core';

@Component({
  // selector: 'app-button',
  // or using attribute selector 
  // selector: 'button[appButton]',
  // or using multiple selector 
  selector: 'button[appButton], a[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
