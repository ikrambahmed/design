import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-frais-mission',
  templateUrl: './frais-mission.component.html',
  styleUrls: ['./frais-mission.component.css']
})
export class FraisMissionComponent implements OnInit {
  OrdMissForm:FormGroup ; 
  constructor(private fb : FormBuilder) { 
    this.OrdMissForm = this.fb.group({
      pays: ['',Validators.required],
      ville: ['',Validators.required]

    }) ; 
  }

  ngOnInit() {
  }

}
