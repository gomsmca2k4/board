import { Component, OnInit } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";
import { TrelloBoardService } from "../trello-board.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-create-board",
  templateUrl: "./create-board.component.html",
  styleUrls: ["./create-board.component.scss"]
})
export class CreateBoardComponent implements OnInit {
  boardName: string;
  editBoardName: string;
  boardForm: FormGroup;
  constructor(
    private router: Router,
    private trelloBoardService: TrelloBoardService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.boardForm = this.formbuilder.group({
      BoardName: ["", Validators.required]
    });
  }

  get boardNamefromForm(): any {
    return this.boardForm.get("BoardName");
  }

  createBoard() {
    this.router.navigate(["board-list/" + this.boardNamefromForm.value]);
  }
}
