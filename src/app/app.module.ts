import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CreateBoardNameComponent } from "./create-board-name/create-board-name.component";
import { BoardListComponent } from "./board-list/board-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
/*import { TrelloCardsService } from './trello-cards.service'*/
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateBoardNameComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    ToastrModule.forRoot()
  ],
  /* providers: [TrelloCardsService],*/
  bootstrap: [AppComponent]
})
export class AppModule {}
