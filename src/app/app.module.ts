import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MnFullpageDirective, MnFullpageService } from "ng2-fullpage";
import { AngularFireModule } from 'angularfire2';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { MasterComponent } from './master/master.component';
import { AppRoutingModule } from './app-routing.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyDghV4zUgHAK6fg7waocCDyLy7PzAYhJMU',
  authDomain: 'adriana-portfolio.firebaseapp.com',
  databaseURL: 'https://adriana-portfolio.firebaseio.com',
  storageBucket: 'adriana-portfolio.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    MasterComponent,
    MnFullpageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [
    MnFullpageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
