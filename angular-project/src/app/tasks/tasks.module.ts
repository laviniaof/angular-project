/** Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** App Imports */
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/card/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  //others components uses the tasks component, so we need to export
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
