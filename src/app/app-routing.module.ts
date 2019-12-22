import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateBoardNameComponent } from "./create-board-name/create-board-name.component";
import { BoardListComponent } from "./board-list/board-list.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create-board-name", component: CreateBoardNameComponent },
  { path: "board-list", component: BoardListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
