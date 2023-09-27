import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes:Routes = [
  
  {
    path:'',
    component:LoginComponent
 
   },

   {
    path:'signup',
    component:SignupComponent
 
   },
 

   
   {
    path:'forgetpassword',
    component:ForgetpasswordComponent
 
   }
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class DashboardRountingModule { }
