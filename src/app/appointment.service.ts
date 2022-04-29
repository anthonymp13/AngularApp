import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointmentUrl = "/appointments";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
   * Get appointments
   *
   */
  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointmentUrl);
  }

  /**
   * Add appointment
   * 
   * @param appointment
   */
  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.appointmentUrl, appointment, this.httpOptions);
  }

  /**
   * Delete appointment
   * 
   * @param id
   */
  deleteAppointment(id: number): Observable<Appointment> {
    const url = `${this.appointmentUrl}/${id}`;

    return this.http.delete<Appointment>(url, this.httpOptions);
  }

  /**
   * Edit appointment
   * 
   * @param appointment
   */
  editAppointment(appointment: Appointment): Observable<any> {
    const url = `${this.appointmentUrl}/${appointment.id}`;
    return this.http.put(url, appointment, this.httpOptions);
  }
}
