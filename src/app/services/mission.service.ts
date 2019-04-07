import { Injectable } from '@angular/core';
import { mission } from '../models/mission';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ordMiss } from '../models/Ord_Miss';
import { environment } from '../shared/environment';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  baseUrl = environment.baseUrl;

  missions : mission[];
  constructor(private http : HttpClient) { }

  getMissions(codeDept: String):Observable<any> {
    return this.http.get(this.baseUrl+'/api/mission/listeMissionByDept?codeDept='+codeDept) ; 
  }

  addOrdMiss(o : ordMiss)    : Observable<any> {
    
    return this.http.post(this.baseUrl+'/api/addordMiss',o  ) ; 
  }
  
  addMission( mission : mission) : Observable<any>{
    console.log('el service') ; 
    return this.http.post(this.baseUrl+'/api/mission/add' ,mission  ) ; 
  }
  getMotcle():Observable<any> 
  {
    return this.http.get(this.baseUrl+'/api/allMotcle') ; 
  }

  getLatestMissionCode(code : String) :Observable<any>{
    return this.http.get(this.baseUrl+'/api/mission/latestMissionCode?codeDept='+code) ; 
  }
}
