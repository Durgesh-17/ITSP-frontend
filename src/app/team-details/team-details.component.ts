
import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  team?: Team;
  constructor(private teamService:TeamService,
    private route:ActivatedRoute,
    private location:Location) { }

  getTeam():void{
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeam(id).subscribe(team => this.team = team );
  }

  ngOnInit(): void {
    this.getTeam();
  }

}
