import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrelloHomeComponent } from "./feature/trello-home/trello-home.component";
import { CreateBoardComponent } from "./feature/create-board/create-board.component";
import { BoardListComponent } from "./feature/board-list/board-list.component";

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
