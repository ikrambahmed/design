import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MissionnaireComponent } from './missionnaire/missionnaire.component';
import { HomeComponent } from './home/home.component';
import { ListeMissionnaireComponent } from './liste-missionnaire/liste-missionnaire.component';
import { MissionComponent } from './mission/mission.component';
import { ListaaComponent } from './listaa/listaa.component';
import { OrdMissionnaireComponent } from './ord-missionnaire/ord-missionnaire.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ListeMissionComponent } from './liste-mission/liste-mission.component';
import { MissionaireComponent } from './missionaire/missionaire.component';

const routes: Routes = [
  {path :'login' , component : LoginComponent} , 
  {path:'home' , component: HomeComponent },
  {path:'missionnaire' , component:MissionnaireComponent},
  {path:'liste-m',component:ListeMissionnaireComponent},
    {path:'mission',component:MissionComponent},
    {path : 'ord',component:OrdMissionnaireComponent},
    {path:'lista', component:ListaaComponent},
    {path:'change', component: ChangePassComponent} , 
    {path:'list' ,component:ListeMissionComponent} , 
    {path:'miss', component:MissionaireComponent}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
