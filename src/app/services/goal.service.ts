import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goals } from '../models/Goals';
import { Tasks } from '../models/Tasks';


@Injectable({
  providedIn: 'root'
})
export class GoalService {
  
  private apiUrl = 'http://localhost:8080/app/goals';

  constructor(private http: HttpClient) { }

  getAllGoals(): Observable<Goals[]> {
    return this.http.get<Goals[]>(this.apiUrl);
  }

  getTasksForGoal(goalId: number): Observable<Tasks[]> {
    const tasksUrl = `http://localhost:8080/app/goals/${goalId}/tasks`;
    return this.http.get<Tasks[]>(tasksUrl);
  }

  createGoal(goal: Goals): Observable<Goals> {
    return this.http.post<Goals>(this.apiUrl, goal);
  }


}
