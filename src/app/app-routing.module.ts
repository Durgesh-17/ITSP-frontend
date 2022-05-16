import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamsComponent } from './teams/teams.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:"teams", component:TeamsComponent},
  {path:"home", component:HomepageComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"details/:id", component:TeamDetailsComponent},
  {path:"todos", component:TodoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
