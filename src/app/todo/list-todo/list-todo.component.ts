import { Component, type OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { type StateTodoModel, type StateTodoView, type TodoModel, type TodoView } from "../Todo";
import { STATES, TODOS } from "./mock-list-todo";

@Component({
  selector: "app-list-todo",
  templateUrl: "./list-todo.component.html",
  styleUrls: ["./list-todo.component.css"],
})
export class ListTodoComponent implements OnInit {
  newValue = "";
  todoList: TodoView[] = [];
  stateTodoList: StateTodoView[] = [];

  constructor(private router: Router) {}

  async goToTodoDetail(todoView: TodoView) {
    await this.router.navigate(["/todo", todoView.id]);
  }

  ngOnInit(): void {
    TODOS.forEach(x => this.todoList.push(this.todoModelToView(x)));
    STATES.forEach(x => this.stateTodoList.push(this.stateTodoModelToView(x)));
  }
  goToEditTodo(todoView: TodoView) {
    todoView.edit = true;
  }

  addTodo() {
    const newTodo: TodoView = { id: this.findId(), edit: false, state: 1, checked: false, value: this.newValue.trim() };
    this.todoList.push(newTodo);
    this.newValue = "";
  }

  updateValueTodo(todoView: TodoView) {
    todoView.edit = false;
    const index = this.todoList.indexOf(todoView);
    this.todoList[index] = todoView;
  }

  cancelEditTodo(todoView: TodoView) {
    todoView.edit = false;
  }

  removeTodo(todoView: TodoView) {
    this.todoList = this.todoList.filter(x => x.id !== todoView.id);
  }

  comboState(todoView: TodoView, component: HTMLSelectElement) {
    todoView.checked = component.value === "3";
  }

  checkState(todoView: TodoView, component: HTMLInputElement) {
    if (component.checked) {
      todoView.state = 3;
      todoView.edit = false;
    } else {
      todoView.state = 1;
    }
  }

  clearCompleted() {
    this.todoList = this.getNotCompleted();
  }

  getNotCompleted() {
    return this.todoList.filter(x => x.state !== 3);
  }

  getTodoLeft() {
    const left = this.getNotCompleted().length;
    if (left > 1) {
      return left + "items left";
    } else {
      return left + "item left";
    }
  }

  getLabelTodo(value: string, state: number) {
    const stateTodo = this.stateTodoList.find(x => x.id == state); //=> ==...
    return value + " " + stateTodo?.value + " ";
  }
  private findId(): number {
    const ids = this.todoList.map(x => x.id);
    return Math.max(...ids);
  }
  private todoViewToModel(todoView: TodoView): TodoModel {
    return todoView;
  }

  private todoModelToView(todoModel: TodoModel): TodoView {
    return { ...todoModel, edit: false, checked: todoModel.state === 3 };
  }

  private stateTodoViewToModel(stateTodoView: StateTodoView): StateTodoModel {
    return stateTodoView;
  }

  private stateTodoModelToView(stateTodoModel: StateTodoModel) {
    return { ...stateTodoModel, edit: false };
  }
}
