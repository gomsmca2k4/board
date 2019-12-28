import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
