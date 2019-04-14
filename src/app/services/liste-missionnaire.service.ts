import { Injectable } from '@angular/core';
import { Missionnaire } from '../models/missionnaire';

@Injectable({
  providedIn: 'root'
})
export class ListeMissionnaireService {

  private missionnaires: Missionnaire[]= [] ;

  constructor() {
    let m1: Missionnaire = new Missionnaire('11406260','ikram') ; 
    let m2 : Missionnaire= new Missionnaire('1162620','dorra') ; 
    this.missionnaires.push(m1) ; 
    this.missionnaires.push(m2) ; 

   }
   public getMissionnaires():Missionnaire[]
   { return this.missionnaires ; 
   }
}
