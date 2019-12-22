import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TrelloCardsService } from "../trello-cards.service";
@Component({
  selector: "app-create-board-name",
  templateUrl: "./create-board-name.component.html",
  styleUrls: ["./create-board-name.component.css"]
})
export class CreateBoardNameComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private trelloCardsService: TrelloCardsService
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formbuilder.group({
      BoardName: ["", Validators.required]
    });
  }

  get boardNamefromForm(): any {
    return this.angForm.get("BoardName");
  }

  createBoard() {
    var obj = {
      name: this.boardNamefromForm.value
    };
    this.trelloCardsService.addBoard(obj).subscribe(data => {
      console.log("add baordname result " + JSON.stringify(data));
      this.router.navigate(["/", "board-list"]);
    });
  }

  ngOnInit() {}

  boardDash() {
    this.router.navigate(["/", "board-list"]);
  }
}
