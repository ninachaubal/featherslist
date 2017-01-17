import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeathersApp } from 'feathers-client'

declare var app: FeathersApp;

@Component({
  selector: 'login-cmp',
  templateUrl: 'login.html',
  styleUrls: ['login.css']
})
export class LoginComponent {
  showStatus: boolean = false;
  statusMessage: string = '';
  private router: Router;
  credentials: Credentials = new Credentials();

  constructor(router: Router) {
    this.router = router;
  }

  onSubmit() {
    app.authenticate({
      strategy: 'local',
      'username': this.credentials.username,
      'password': this.credentials.password
    }).then((result) => {
      console.log(result);
      // Authentication successful. Reroute to home.
      this.router.navigateByUrl('/');
    }).catch((error) => {
      // Authentication error.
      window.console.log(error);
      this.showStatus = true;
      this.statusMessage = error.message;
    });
  }
}

class Credentials {
  username: string;
  password: string;
}
