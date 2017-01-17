import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AdComponent } from './ad/ad'
import { AdminComponent } from './admin/admin';
import { AppComponent }  from './app.component';
import { CategoryComponent } from './category/category';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { LogoutComponent } from './logout/logout';
import { NavComponent } from './nav/nav';
import { NewAdComponent } from './ad/new-ad';
import { StatusMessageComponent } from './status-message/status-message';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'logout', component: LogoutComponent},
    ])
  ],
  declarations: [
    AdComponent,
    AdminComponent,
    AppComponent,
    CategoryComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    NavComponent,
    NewAdComponent,
    StatusMessageComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
