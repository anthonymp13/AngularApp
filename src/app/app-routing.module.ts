import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { ViewAppointmentsComponent } from './components/view-appointments/view-appointments.component';

const routes: Routes = [
  {
    path: 'add-appointment',
    component: AddAppointmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-appointment',
    component: ViewAppointmentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'add-appointment',
    pathMatch: 'full'
  }
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
