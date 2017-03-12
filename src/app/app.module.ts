import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import { WorkPermitComponent } from './work-permit/work-permit.component';
import { TaskStatusComponent } from './task-status/task-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskComponent,
    WorkPermitComponent,
    TaskStatusComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
