import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, of, tap } from "rxjs";

import { type StateTodoModel, type TodoModel } from "./Todo";

const defaultHttpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList(): Promise<TodoModel[]> {
    return firstValueFrom(
      this.http.get<TodoModel[]>("api/todo").pipe(tap(value => console.log("getTodoList()", value))),
    );
  }

  async addTodo(todo: TodoModel): Promise<void> {
    await firstValueFrom(
      this.http.post("api/todo", todo, defaultHttpOptions).pipe(tap(value => console.log("addTodo()", value))),
    );
  }

  async updateTodo(todo: TodoModel): Promise<void> {
    await firstValueFrom(
      this.http.put("api/todo", todo, defaultHttpOptions).pipe(tap(value => console.log("updateTodo()", value))),
    );
  }

  async deleteTodoById(id: number): Promise<void> {
    await firstValueFrom(this.http.delete(`api/todo/${id}`).pipe(tap(value => console.log("deleteTodoById()", value))));
  }

  getStateTodoList(): Promise<StateTodoModel[]> {
    return firstValueFrom(
      this.http.get<StateTodoModel[]>("api/state-todo").pipe(tap(value => console.log("getStateTodoList()", value))),
    );
  }

  private handleError(error: unknown, errorValue: unknown) {
    console.error(error);
    return of(errorValue);
  }
}
