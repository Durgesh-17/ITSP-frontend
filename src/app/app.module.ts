import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamsComponent,
    TeamDetailsComponent,
    HomepageComponent,
    TodoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
