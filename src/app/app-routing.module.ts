import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { ListTodoComponent } from './todo/list-todo/list-todo.component';
import { DetailTodoComponent } from './todo/detail-todo/detail-todo.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch:'full'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
