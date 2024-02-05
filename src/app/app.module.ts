import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { TaskListComponent } from './components/task-list/task-list.component'

@NgModule({
  declarations: [
    AppComponent,
    GoalListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
