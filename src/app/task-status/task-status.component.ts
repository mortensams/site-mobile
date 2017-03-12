import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit {

  enterTime = new Date();
  constructor() { }

  ngOnInit() {
  }

}
