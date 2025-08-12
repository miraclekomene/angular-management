import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

// We could also use ng-content and select different things,
@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // encapsulation: ViewEncapsulation.Emulated //enum (they are group of allowed values) by adding the dot enables you to add the values which you can use.
  encapsulation: ViewEncapsulation.None, //which simply disables that style scoping.

  //  Emulated means that Angular emulates the ShadowDom behavior,
  // which is a browser thing, which in the end means that styles
  // that belong to a component or to an element should be scoped
  // to that element.
  // The ShadowDom is not a TypeScript
  // or Angular specific feature.
  // Instead it's a browser feature
  // because in the browser you can also build
  // custom HTML elements totally without Angular.
  // And Angular emulates that browser feature
  // for its own components.

  // host is recomended
  host:{
    class: 'control',
    //adding/listener  events
    '(click)' : 'onClick()'

    // OR using HostListener(stated below)
  }
  // host wants an object as a value,
  // and that object then takes
  // any key value pairs of your choice.
})
export class ControlComponent implements AfterContentInit {
 
  //   Now what HostBinding will do is
  // it will take a look at this property name,
  // and it will then add it as a property
  // to the host element
  // and set this as a value for that property.
  // This feature just exists for backward compatibility reasons,
  // because in the past it was a common way
  // of setting those host properties.
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('Clicked');
  // };


  
  label = input.required<string>();
  // OR using @input decorator
  // @Input() label: string = '';
  
  
  // let's say we wanna log some host element information
  // whenever it is clicked.
  // Now, what you can do to achieve this
  // is you can inject a special value into your component,   
  //   you can inject either with the constructor
  // as you learned it for services
  // or with help of that inject function 
  private el = inject(ElementRef)
  // ElementRef is a class defined by Angular.
  // So it's part of the Angular framework,
  // which defines a reference to some element
  // that's rendered to the page.

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input') //angular 17.3 or more

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    })
  }
  ngAfterContentInit(){
    // throw new Error('Method not implemented.');
    // ... 
  }
  onClick(){
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
