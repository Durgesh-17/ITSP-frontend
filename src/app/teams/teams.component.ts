import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TEAMS } from '../mock-teams';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[] = [] 
  constructor(private teamService:TeamService) { }

  getTeams(): void{
    this.teamService.getTeams().subscribe(teams=>this.teams=teams)
  }

  ngOnInit(): void {
    this.getTeams();
  }

}
