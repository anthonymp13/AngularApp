import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';

const routes: Routes = [
  { path: 'add-appointment', component: AddAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
