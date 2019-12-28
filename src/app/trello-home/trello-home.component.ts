import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-trello-home",
  templateUrl: "./trello-home.component.html",
  styleUrls: ["./trello-home.component.scss"]
})
export class TrelloHomeComponent implements OnInit {
  isBoarFormVisible = true; //
  constructor() { }

  ngOnInit() { }

  public showBoardForm() {
    this.isBoarFormVisible = true;
  }
}
