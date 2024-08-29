/** Angular Imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** App Imports */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  //the 'declarations' don't handle standalone components
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  //the 'imports' handles standalone components
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
