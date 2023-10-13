import { type StateTodoModel, type TodoModel } from "../Todo";

export const TODOS: TodoModel[] = [
  { id: 1, state: 1, value: "toto" },
  { id: 2, state: 2, value: "tata" },
  { id: 3, state: 3, value: "titi" },
];

export const STATES: StateTodoModel[] = [
  { id: 1, isDefault: true, value: "A faire" },
  { id: 2, isDefault: false, value: "En cours" },
  { id: 3, isDefault: false, value: "Terminé" },
];
