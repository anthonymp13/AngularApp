import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../../appointment.service';
import { Appointment } from '../../appointment';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  appointments: Appointment[] = [];
  appointment?: Appointment;
  update: boolean = false;

  appointmentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,

    )
  {

    this.appointmentForm = this.formBuilder.group({
      start: '',
      end: '',
      name: '',
      description: '',
      duration: ''
    });

  }

  ngOnInit() {
    this.getAppointments();
  }

  


  onSubmit(): void {
    /*
     * Formats the duration for C# to be passed to API.
     * Done here to avoid adding extra logic to controllers, since
     * appointment end time is not apart of the Model. Could
     * probably be in its own method.
     */
    let duration;
    let start;
    let end;
    let formattedDays;
    let formattedHours;
    let formattedMinutes;
    let formattedDuration = "00:00:00";

    start = new Date(this.appointmentForm.value.start).getTime();
    end = new Date(this.appointmentForm.value.end).getTime();

    if (start && end) {
      let days = 0;
      let hours = 0;
      let minutes = 0;

      duration = (end - start) / (1000 * 3600 * 24);
      days = duration;

      if (duration % 1 != 0) {
        days = Math.trunc(duration);
        hours = (duration % 1) * 24;

        if (hours % 1 != 0) {
          /* Rounds to nearest whole number because it will
           * display milliseconds
           */
          minutes = Math.round((hours % 1) * 60);
          if (minutes < 1) {
            minutes = 1;
          }
          hours = Math.trunc(hours);
        }
      }

      formattedDays = days < 10 ? "0" + days : days;
      formattedHours = hours < 10 ? "0" + hours : hours;
      formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

      formattedDuration = `${formattedDays}:${formattedHours}:${formattedMinutes}`;
    }

    let appointment: Appointment = {
      start: this.appointmentForm.value.start,
      duration: formattedDuration,
      name: this.appointmentForm.value.name,
      description: this.appointmentForm.value.description
    }

    if (!appointment) { return; }

    this.appointmentService
      .addAppointment(appointment)
      .subscribe(appointment =>
        this.appointments.push(appointment));
  }

  edit(appointment: Appointment): void {
    let duration;
    let start;
    let end;
    let formattedDays;
    let formattedHours;
    let formattedMinutes;
    let formattedDuration = "00:00:00";

    start = new Date(this.appointmentForm.value.start).getTime();
    end = new Date(this.appointmentForm.value.end).getTime();

    if (start && end) {
      let days = 0;
      let hours = 0;
      let minutes = 0;

      duration = (end - start) / (1000 * 3600 * 24);
      days = duration;

      if (duration % 1 != 0) {
        days = Math.trunc(duration);
        hours = (duration % 1) * 24;

        if (hours % 1 != 0) {
          /* Rounds to nearest whole number because it will
           * display milliseconds
           */
          minutes = Math.round((hours % 1) * 60);
          if (minutes < 1) {
            minutes = 1;
          }
          hours = Math.trunc(hours);
        }
      }

      formattedDays = days < 10 ? "0" + days : days;
      formattedHours = hours < 10 ? "0" + hours : hours;
      formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

      formattedDuration = `${formattedDays}:${formattedHours}:${formattedMinutes}`;
    }

    let updateAppointment: Appointment = {
      start: this.appointmentForm.value.start,
      duration: formattedDuration,
      name: this.appointmentForm.value.name,
      description: this.appointmentForm.value.description
    }


    
    this.appointmentService.editAppointment(updateAppointment);
    console.log("Working?");
  }

  delete(appointment: Appointment): void {
    this.appointments = this.appointments.filter(x => x !== appointment);
    this.appointmentService.deleteAppointment(appointment.id!).subscribe();
  }

  /** Get appointments from appointment service */
  getAppointments(): void {
    this.appointmentService.getAppointments()
      .subscribe(appointments => this.appointments = appointments);
  }
  

}

