import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
import { Appointment } from '../../appointment';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  appointment?: Appointment;

  constructor(
    
  )
  { }

  ngOnInit(): void {

   
  }

  


}
