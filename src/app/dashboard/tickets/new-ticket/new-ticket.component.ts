import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{
  // onSubmit(titleElement: HTMLInputElement, requestElement: HTMLTextAreaElement){
  //   // console.log(titleElement);
  //   // console.log(requestElement);
  //   console.dir(titleElement.value);
  //   console.dir(requestElement.value);
  // }

  // OR
  //   Now the ViewChild decorator is a decorator that can be used
  // to select elements in the template of this component
  // and make them available here in this component class.
  // ViewChild therefore is a decorator
  // that helps us find child elements in that component's view,
  // so in that component's template.

  // You can't select elements by CSS class,
  // but you can pass the name of a template variable.
  // So by passing form here without the hashtag,
  // I'm telling Angular that it should look for an element
  // with a template variable called form on it,
  // and then it should store the value that's stored
  // in that template variable or the value of the element
  // on which this template variable is placed,
  // therefore in that property here.
  
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // the ElementRef type just defines the type
  // for a wrapper object though.
  // Because Angular in the end will wrap the element it finds
  // with help of that selector in such an ElementRef object,
  // and that's why ElementRef is actually a generic type
  // that needs extra information about the type of value
  // that will be wrapped by it here when using ViewChild.
  // So you give it that extra information
  // by adding angle brackets here,
  // and then between those angle brackets,
  // you define the type of value
  // that will be wrapped by ElementRef,
  // which will be the type of value
  // that will be selected by that selector,
  // so the type of element that will be selected by it.

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form')//If you wanted to select a button in your template or a string
  // the viewChild function is a relatively new feature,
  // it's only been available since Angular 17.3
  // and it's not available in older Angular versions.
  // And viewChild will actually give you a Signal as a value.
  // So it's a Signal-related feature.
  // Now it generally works like the decorator though.

  entererdTitle = '';
  entererdText = '';
  // @Output() add = new EventEmitter<{title: string; text: string}()
  // or
  add = output<{title: string; text: string}>();
  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  // onSubmit(title: string, ticketText: string){
  // or using two-way binding
  onSubmit(){
    // console.log(title);
    // console.log(ticketText);
    // this.add.emit({title: title, text: ticketText })
    // OR two-way binding
    this.add.emit({title: this.entererdTitle, text: this.entererdText }) //two-way binding
    // this.form?.nativeElement.reset();
    // OR two-way binding
    this.entererdTitle = '';
    this.entererdText = '';
    
    // tells TypeScript that it should only try
    // to access the reset method if this here is not undefined,
    // otherwise it will not continue
    // so that it won't generate a runtime error.
  }
}
