import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RetreiveComponent } from './retreive/retreive.component';

const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"schedule", component:ScheduleComponent},
  {path:"user-managment",component:UserManagementComponent},
  {path:"retreive", component:RetreiveComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

