import { Component } from '@angular/core';
import { FeathersApp } from 'feathers-client'

declare var app: FeathersApp;
@Component({
  selector: 'logout-cmp',
  templateUrl: 'logout.html',
  styleUrls: ['logout.css']
})
export class LogoutComponent {
  constructor() {
    app.logout();
  }
}
