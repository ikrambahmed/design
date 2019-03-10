import { BrowserModule , } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {StoreModule} from '@ngrx/store' ; 
import {principalReducer} from './shared/principal.reducer';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { XHrInterceptor } from './xhr.interceptor';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { ListeMissionnaireComponent } from './liste-missionnaire/liste-missionnaire.component';
import { ListeMissionComponent } from './liste-mission/liste-mission.component';
import { MissionComponent } from './mission/mission.component';
import { MissionnaireComponent } from './missionnaire/missionnaire.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { MissionService } from './services/mission.service';
import { ListeMissionnaireService } from './services/liste-missionnaire.service';
import { MissionnaireService } from './services/missionnaire.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ContentComponent,
    ListeMissionnaireComponent,
    ListeMissionComponent,
    MissionComponent,
    MissionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot() , 
    FormsModule , 
    StoreModule.forRoot({principal:principalReducer}) , 
    Ng2SearchPipeModule,
    ReactiveFormsModule , 
    HttpClientModule ,
    NgxPaginationModule,
    BrowserAnimationsModule


  ],
  schemas: [ NO_ERRORS_SCHEMA ],

  providers: [ AppService, CookieService,MissionnaireService,ListeMissionnaireService,MissionService, 
    {provide :HTTP_INTERCEPTORS, useClass :XHrInterceptor , multi : true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
