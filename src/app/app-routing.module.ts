import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrelloHomeComponent } from "./trello-home/trello-home.component";
import { CreateBoardComponent } from "./create-board/create-board.component";
import { BoardListComponent } from "./board-list/board-list.component";

const routes: Routes = [
  { path: "", component: TrelloHomeComponent },
  { path: "create-board", component: CreateBoardComponent },
  { path: "board-list/:id", component: BoardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
