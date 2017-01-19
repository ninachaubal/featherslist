import { Component } from '@angular/core';
import { FeathersApp } from 'feathers-client'

declare var app: FeathersApp;

@Component({
  selector: 'home-cmp',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class HomeComponent {
  constructor() {}
}
