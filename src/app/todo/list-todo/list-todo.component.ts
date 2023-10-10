import { Component, type OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { type TodoModel } from "../Todo";
import { TODOS } from "./mock-list-todo";

@Component({
  selector: "app-list-todo",
  templateUrl: "./list-todo.component.html",
  styleUrls: ["./list-todo.component.css"],
})
export class ListTodoComponent implements OnInit {
  todoList: TodoModel[] = TODOS;
  todoModelList: TodoModel[] = [];

  constructor(private router: Router) {}

  async goToTodoDetail(todoModel: TodoModel) {
    await this.router.navigate(["/todo", todoModel.id]);
  }

  ngOnInit(): void {
    this.todoModelList = TODOS;
  }
}
