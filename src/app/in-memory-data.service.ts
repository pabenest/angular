import { Injectable } from "@angular/core";
import { type InMemoryDbService } from "angular-in-memory-web-api";

import { STATES, TODOS } from "./todo/list-todo/mock-list-todo";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { todo: TODOS, "state-todo": STATES };
  }
}
