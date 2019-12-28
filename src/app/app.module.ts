import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrelloHomeComponent } from './trello-home/trello-home.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { BoardListComponent } from './board-list/board-list.component';
import { MaterialModule } from './material/material.module';
import { TrelloBoardService } from './trello-board.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TrelloHomeComponent,
    CreateBoardComponent,
    BoardListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule],

  providers: [TrelloBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
