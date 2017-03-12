import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

 tasks = [
    {value: 'task-0', viewValue: 'Painting'},
    {value: 'task-1', viewValue: 'Maintain mechanics'},
    {value: 'task-2', viewValue: 'Electricity audit'}
  ];

   turbines = [
    {value: 'turbine-0', viewValue: 'A1'},
    {value: 'turbine-1', viewValue: 'A2'},
    {value: 'turbine-2', viewValue: 'A3'}
  ];

  constructor(public router: Router) { }

  requestEntry() {
    this.router.navigate(['task-status']);
  }
  
  ngOnInit() {
  }

}
