import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

import { TermsComponent } from './terms/terms.component';
import { MainComponent } from './main/main.component';
import { AppointComponent } from './appoint/appoint.component';
import { ReadComponent } from './read/read.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MissionComponent } from './mission/mission.component';




const routes: Routes = [
  {
    path : 'contactus',
    component :ContactusComponent
  },
  {
    path : 'about',
    component :AboutComponent
  },
  
  {
    path : 'home',
    component :HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'terms',
    component:TermsComponent
  },
  {
    path:'',
    component:MainComponent
  },
  {
    path:'appoint',
    component:AppointComponent
  },
  {
    path:'read',
    component:ReadComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'doctors',
    component:DoctorsComponent
  },
  {
    path:'mission',
    component:MissionComponent
  },
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
