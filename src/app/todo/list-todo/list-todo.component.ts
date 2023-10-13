import { Component, type OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { type StateTodoModel, type TodoModel } from "../Todo";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-list-todo",
  templateUrl: "./list-todo.component.html",
  styleUrls: ["./list-todo.component.css"],
})
export class ListTodoComponent implements OnInit {
  newValue = "";
  todoList: TodoModel[] = [];
  stateTodoList: StateTodoModel[] = [];
  console = console;

  constructor(
    public router: Router,
    private todoService: TodoService,
  ) {}

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(todoList => (this.todoList = todoList));
    this.todoService.getStateTodoList().subscribe(stateTodoList => (this.stateTodoList = stateTodoList));
  }

  addTodo() {
    this.todoList.push({ id: this.findLastId() + 1, state: 1, value: this.newValue.trim() });
    this.newValue = "";
  }

  removeTodo(todoView: TodoModel) {
    this.todoList = this.todoList.filter(x => x.id !== todoView.id);
  }

  getNotCompleted() {
    return this.todoList.filter(x => x.state !== 3);
  }

  getStateTodo(id: number) {
    return this.stateTodoList.find(state => state.id === id);
  }

  getTodoLeftLabel() {
    const left = this.getNotCompleted().length;
    if (left > 1) {
      return left + "items left";
    }
    return left + "item left";
  }

  private findLastId(): number {
    const ids = this.todoList.map(x => x.id);
    return Math.max(...ids);
  }
}
