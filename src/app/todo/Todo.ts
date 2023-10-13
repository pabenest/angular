import { type WithId } from "@common/model/WithId";

export interface TodoModel extends WithId {
  state: number;
  value: string;
}
export interface StateTodoModel extends WithId {
  isDefault: boolean;
  value: string;
}

export interface TodoView extends TodoModel {
  checked: boolean;
  edit: boolean;
}

export interface StateTodoView extends StateTodoModel {
  edit: boolean;
}
