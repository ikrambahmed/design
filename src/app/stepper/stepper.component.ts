import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  goTo(){

    this.router.navigateByUrl('/mission') ; 

  }
  goTo1(){

    this.router.navigateByUrl('/ord') ; 

  }
  goTo2(){
    this.router.navigateByUrl('/frais') ; 

  }
  goTo3(){
    this.router.navigateByUrl('/recap') ; 

  }
}
