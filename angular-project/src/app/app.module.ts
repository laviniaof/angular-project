import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  //the 'declarations' don't handle standalone components
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent],
  //the 'imports' handles standalone components
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
