import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { InMemoryDataService } from "./in-memory-data.service";
import { TodoModule } from "./todo/todo.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule,
    AppRoutingModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
