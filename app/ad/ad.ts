import { Component } from '@angular/core';
import { FeathersApp } from 'feathers-client'

declare var app: FeathersApp;

@Component({
  selector: 'ad-cmp',
  templateUrl: 'ad.html',
  styleUrls: ['ad.css'],
})
export class AdComponent {
  constructor() {}
}
