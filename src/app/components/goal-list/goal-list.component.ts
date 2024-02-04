import { Component } from '@angular/core';
import { GoalService } from 'src/app/services/goal.service';  
import { Goals } from 'src/app/models/Goals';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
  export class GoalListComponent {
      goals: Goals[] = [];

      constructor(private goalService: GoalService){}

      ngOnInit():void{
        this.loadGoals();
      }

     loadGoals(){
      this.goalService.getAllGoals().subscribe(
        (data) => {
          this.goals = data;
        },
        (error) => {
          console.error('Error al cargar Objetivo: ',error);
        }
      )
};

createNewGoal() {
  this.loadGoals(); // Actualiza la lista después de crear una nueva meta
}

}
