import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { type Observable, of } from "rxjs";

import { type StateTodoModel, type TodoModel } from "./Todo";

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>("api/todo");
  }

  getStateTodoList(): Observable<StateTodoModel[]> {
    return this.http.get<StateTodoModel[]>("api/state-todo");
  }

  private handleError(error: unknown, errorValue: unknown) {
    console.error(error);
    return of(errorValue);
  }
}
