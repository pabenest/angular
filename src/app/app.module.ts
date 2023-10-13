import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TodoModule } from "./todo/todo.module";

@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, TodoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
