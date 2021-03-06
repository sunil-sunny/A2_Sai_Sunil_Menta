import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorpageComponent } from './doctorpage/doctorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DoctorPageAppointmentsComponent } from './doctor-page-appointments/doctor-page-appointments.component';
import { SearchdoctorComponent } from './searchdoctor/searchdoctor.component';


const routes: Routes = [

  {path : 'login' , component : LoginComponent},
  {path: 'doctorpage', component: DoctorpageComponent},
  {path: '', component: HomepageComponent},
  {path: 'accept', component: DoctorPageAppointmentsComponent},
  {path: 'search', component: SearchdoctorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
