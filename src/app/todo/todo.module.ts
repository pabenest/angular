import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { RouterModule, Routes } from '@angular/router';

const todoRoutes: Routes = [
  {path: 'todos', component:ListTodoComponent},
  {path: 'todo/:id', component:DetailTodoComponent}]

@NgModule({
  declarations: [
ListTodoComponent,
DetailTodoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes)
  ]
})
export class TodoModule { }
