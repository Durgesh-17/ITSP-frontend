import { Injectable } from '@angular/core';
import { TEAMS } from './mock-teams';
import { Team } from './team';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TeamService {

  getTeams():Observable<Team[]>{
    const teams = of(TEAMS)
    return teams;
  }
  getTeam(id:number):Observable<Team>{
    const team = TEAMS.find(h =>h.id===id)!;
    return of(team);
  }
  constructor() { }
}
