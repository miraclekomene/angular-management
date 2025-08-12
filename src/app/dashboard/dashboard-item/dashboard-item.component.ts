// import { Component, Input } from '@angular/core';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host:{
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
  // @Input({ required: true}) image!: {src: string; alt: string};// add exclamation mark to tell typescript that the "image" will never be undefined
  // @Input({ required: true}) title!: string;

  // OR
  // image = input() // for angular 17.1 or later
  image = input.required<{src: string; alt: string}>();
  title = input.required<string>();
}
