import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/services/goal.service';  
import { Goals } from 'src/app/models/Goals';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
  goals: Goals[] = [];

  
  constructor(private goalService: GoalService) {}

  ngOnInit(): void {
    this.loadGoals();
  }

  private loadGoals() {
    this.goalService.getAllGoals().subscribe(
      (goals) => {
        this.goals = goals;
        this.loadTasksForGoals();
      },
      (error) => {
        console.error('Error al cargar Objetivo: ', error);
      }
    );
  }

  private loadTasksForGoals() {
    // Iterar sobre las metas y cargar las tareas asociadas a cada una
    this.goals.forEach(goal => {
      this.goalService.getTasksForGoal(goal.id).subscribe(
        (tasks) => {
          goal.tasks = tasks;
        },
        (error) => {
          console.error(`Error al cargar las tareas para la meta ${goal.id}:`, error);
        }
      );
    });
  }
}
