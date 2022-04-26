import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appointments?: Appointment[];
  public appointment?: Appointment;

  constructor(http: HttpClient) {
    http.get<Appointment[]>('/appointments').subscribe(result => {
      this.appointments = result;
    }, error => console.error(error));
  }

  title = 'AppointmentsAppAngular';
}

interface Appointment {
  id: number;
  userId: number;
  created: Date;
  lastChanged: Date;
  start: Date;
  duration: string;
  name: string;
  description: string;
}
