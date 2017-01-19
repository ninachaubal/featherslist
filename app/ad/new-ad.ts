import { Component } from '@angular/core';
import { FeathersApp } from 'feathers-client'

declare var app: FeathersApp;

@Component({
  selector: 'new-ad-cmp',
  templateUrl: 'new-ad.html',
  styleUrls: ['new-ad.css'],
})
export class NewAdComponent {
  constructor() {}
}
