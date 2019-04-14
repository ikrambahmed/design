import { Component, OnInit } from '@angular/core';
import { MissionService } from '../services/mission.service';
import { OrdMissService } from '../services/ord-miss.service';
import { ordMiss } from '../models/Ord_Miss';
import { mission } from '../models/mission';
import { DeptGen } from '../models/DeptGen';
import { frais } from '../models/frais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
numCin:String ; 
  numMission:String ;
  missions : mission ; 
  cod:String; 
  m:mission ; 
  ordreMis : ordMiss [] ; 
  constructor(private router : Router ,private missionService : MissionService , private ordMissService : OrdMissService){
    this.numMission = JSON.parse(localStorage.getItem('num_mission')) ;
    console.log('num_mission',this.numMission); 
  }
numOrd:number ;
  ngOnInit(){
    var DeptGenVal = localStorage.getItem('deptGen') ; 
    var data = JSON.parse(DeptGenVal) ; 
    console.log('retrievedObject:',data.code) ;
    this.cod=data.code;
    this.loadMission() ;
    this.loadOrdeMission(this.numMission) ;   
    this.numOrd = JSON.parse(localStorage.getItem('numOrd')) ; 
}
f: frais [] ; 
loadFrais()
{ 
  this.missionService.getFraisMission(this.numMission,this.numOrd,this.numCin,this.cod).subscribe(
  data => { this.f=data ; 
    console.log(data) ; 
    console.log("done ");},
  error => {console.log(error); } , 
  () => {console.log('loading frais was done ')}
)}

selectedCin(cin:String)
{
  this.numCin=cin ;
  console.log(this.numCin,'ikram') ; 
  //this.loadFraisMission(this.numCin) ; 
  this.loadFrais() ; 

}


loadOrdeMission(numMission:String)
  {this.ordMissService.getOrdreMission(this.numMission).subscribe(
    data => { this.ordreMis=data ; 
      console.log("errur");},
    error => {console.log(error); } , 
    () => {console.log('loading ordres was done ')}
  )}

  loadMission()
  {
  this.m= new mission() ;
  this.m.code=this.cod; 
  this.m.numMission=this.numMission;  
  console.log('mission',this.m);
  this.missionService.getOneMission(this.m).subscribe(
    data => {console.log('retour',data) ;
      this.missions=data ; },
    error => {console.log(error); } , 
    () => {console.log('loading mission was done ')}
  )}

  goToOrd()
  {
    this.router.navigateByUrl('/ord');

  }
}


