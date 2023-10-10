import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";

import { DetailTodoComponent } from "./detail-todo/detail-todo.component";
import { ListTodoComponent } from "./list-todo/list-todo.component";

const todoRoutes: Routes = [{ path: "#/", component: ListTodoComponent }];

@NgModule({
  declarations: [ListTodoComponent, DetailTodoComponent],
  imports: [CommonModule, RouterModule.forChild(todoRoutes)],
})
export class TodoModule {}
