/** Angular Imports */
import { Component, inject, Input } from '@angular/core';

/** App Imports */
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private tasksService = inject(TasksService);

  OnCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
