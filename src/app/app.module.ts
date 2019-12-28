import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from "./app.component";
import { CreateBoardComponent } from "./feature/create-board/create-board.component";
import { BoardListComponent } from "./feature/board-list/board-list.component";
import { TrelloBoardService } from "./data/trello-board.service";
import { RootStoreModule } from './root-store/root-store.module';
import { CardStoreModule } from './store/card-store/card-store.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    CreateBoardComponent,
    BoardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    RootStoreModule,
    StoreModule.forRoot({}),
    CardStoreModule
  ],
  providers: [TrelloBoardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
