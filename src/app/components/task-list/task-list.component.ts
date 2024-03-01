import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Tasks } from 'src/app/models/Tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() tasks: Tasks[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  } 

  loadTasks() {
    this.taskService.getAllTasks().subscribe(
      (data) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error al cargar la Tarea: ', error);
      }
    )
  };

  createNewTask() {
    this.loadTasks(); 
  }

  

}

