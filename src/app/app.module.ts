import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './todo/todo.module';
=======
import { TodoModule } from 'src/todo/todo.module';
>>>>>>> 6c8774c22cb7effc638bb88bd1c1fd441862848b

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    TodoModule
=======
    TodoModule,
>>>>>>> 6c8774c22cb7effc638bb88bd1c1fd441862848b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
