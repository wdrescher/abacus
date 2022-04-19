import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

interface JoinTeamSuccessResponse {
  ok: string;
}

interface JoinTeamRequest {
  team_id: number
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    @Inject(HttpClient) private readonly http: HttpClient
  ) {}

  attemptJoinTeam(teamId: number): Observable<JoinTeamSuccessResponse | HttpErrorResponse> {
    const payload: JoinTeamRequest = {
      team_id: teamId
    }
    return this.http.post(`${API_URL}/api/team/join-team`, payload).pipe(
      map(
        (res: JoinTeamSuccessResponse) => res, 
        (err: HttpErrorResponse) => err,
      )
    )
  }
}
