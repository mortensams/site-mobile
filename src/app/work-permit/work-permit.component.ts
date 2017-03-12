import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-permit',
  templateUrl: './work-permit.component.html',
  styleUrls: ['./work-permit.component.css']
})
export class WorkPermitComponent implements OnInit {

  constructor(public router: Router) { }

authorize(){
  this.router.navigate(['/tasks']);
}
  ngOnInit() {
  }

}
