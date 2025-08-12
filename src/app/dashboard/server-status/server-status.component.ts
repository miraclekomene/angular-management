import { Component, OnDestroy, OnInit, DestroyRef, inject, signal, effect } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
// export class ServerStatusComponent {
// implements is a keyword used to indicate that a class must adhere to a specific interface, meaning the class must implement certain methods or properties defined in that interface. It ensures that the class follows a contract.
// export class ServerStatusComponent implements OnInit, OnDestroy {
export class ServerStatusComponent implements OnInit {
  // And that tells TypeScript that currentStatus
  // must be a string that's either online, offline, or unknown.
  // And if I had a typo down there,
  // I would quickly see because I would get an error
  // that the type offline written like that
  // is not assignable to my type here.
  // currentStatus: 'offline' | 'online' | 'unknown' = 'offline';
  currentStatus = signal<'offline' | 'online' | 'unknown' >('offline');
  // currentStatus = 'online';

  private destroyRef = inject(DestroyRef);
  // DestroyRef is a class provided by Angular,
  // and by injecting it and storing it in a property,
  // you can set up a listener with help of that property
  // and that injected value that will trigger a function
  // whenever the Component into which you injected DestroyRef
  // is about to be destroyed.

  // private interval?: NodeJS.Timeout; //OR use the second one below if there is an error
  // private interval?: ReturnType<typeof setInterval>; 
  constructor() {
    effect(() => {
      // by moving this code into this function that's passed
      // to effect, Angular now does set up a subscription.
      console.log(this.currentStatus());

      //  effect is not technically
      // a lifecycle hook,
      // it's a very important function you should at least
      // know about because it does allow you
      // to run code when Signal values change,
      // which you might not need all the time,
      // but which you might need sometimes.
    })
  }
  // constructor(){
  //   setInterval(() => {
  //     const rnd = Math.random(); //random numbers from between 0 - 1 0r 0.999999999999999
  //     if (rnd < 0.5) {
  //       this.currentStatus = 'online';
  //     }else if (rnd < 0.9) {
  //       this.currentStatus = 'offline';
  //     }else{
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // }

  // OR using ngOnInit (recommended) especially doing a http request. http requst should not be done in the constructor
  ngOnInit() {
    console.log('ON INIT');
    
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
      } else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
  ngAfterViewInit(){
    console.log('after view init');
  }
  // ngOnDestroy(){
  //   // console.log('destroyed');
  //   clearTimeout(this.interval)
  // }
}
