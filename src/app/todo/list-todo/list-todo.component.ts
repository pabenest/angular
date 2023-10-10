import { Component, OnInit } from '@angular/core';
import { TODOS } from './mock-list-todo';
import { Router } from '@angular/router';
import { TodoModel } from '../Todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todoList : TodoModel[] = TODOS
  todoModelList: TodoModel[] = [];

constructor(private router : Router) {}


goToTodoDetail(todoModel : TodoModel) {
this.router.navigate(["/todo", todoModel.id])
}

  ngOnInit(): void {
    this.todoModelList = TODOS
  }
}
