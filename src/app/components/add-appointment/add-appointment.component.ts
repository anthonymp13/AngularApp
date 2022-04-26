import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  appointmentForm = this.formBuilder.group({
    start: '',
    end: '',
    name: '',
    description: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.warn('appontment added', this.appointmentForm.value);
  }

}
