import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateBoardComponent } from "./feature/create-board/create-board.component";
import { BoardListComponent } from "./feature/board-list/board-list.component";

const routes: Routes = [
  { path: "", component: CreateBoardComponent },
  { path: "board-list/:id", component: BoardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
