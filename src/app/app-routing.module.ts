import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './login/login.component';
import { WorkPermitComponent }  from './work-permit/work-permit.component';

import { TaskComponent }  from './task/task.component';

import { TaskStatusComponent }  from './task-status/task-status.component';

//import { CanDeactivateGuard }       from './can-deactivate-guard.service';
//import { AuthGuard }                from './auth-guard.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'permit', component: WorkPermitComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'tasks-status', component: TaskStatusComponent },
  
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
   {
    path: 'permit',
    component: WorkPermitComponent,
    data: { title: 'Work Permit ID' }
  },
  {
    path: 'tasks',
    component: TaskComponent,
    data: { title: 'Tasks' }
  },

  {
    path: 'task-status',
    component: TaskStatusComponent,
    data: { title: 'Tasks Status' }
  },
  
  { path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //CanDeactivateGuard * add this when authentication is ready /mks
    
  ]
})
export class AppRoutingModule { }
