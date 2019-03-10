import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MissionnaireComponent } from './missionnaire/missionnaire.component';
import { HomeComponent } from './home/home.component';
import { ListeMissionnaireComponent } from './liste-missionnaire/liste-missionnaire.component';

const routes: Routes = [
  {path :'login' , component : LoginComponent} , 
  {path:'home' , component: HomeComponent },
  {path:'missionnaire' , component:MissionnaireComponent},
  {path:'liste-m',component:ListeMissionnaireComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
