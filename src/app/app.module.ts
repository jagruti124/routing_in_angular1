import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
//import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    //DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
