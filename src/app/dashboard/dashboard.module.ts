import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRountingModule } from './dashboard-rounting.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRountingModule
  ]
})
export class DashboardModule { }
