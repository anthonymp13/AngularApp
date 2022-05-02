import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';



@NgModule({
  declarations: [
    AppComponent,
    AddAppointmentComponent,
    LoginComponent,
    ViewAppointmentsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
