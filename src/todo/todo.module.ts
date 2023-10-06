import { NgModule } from '@angular/core';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    TodoComponent
  ],
  providers: [],
  exports: [TodoComponent],
})
export class TodoModule { }
