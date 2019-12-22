import { Component, OnInit, OnDestroy, NgZone } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DynamicDashboardGrid } from "../dashboard-grid.model";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

import { TrelloCardsService } from "../trello-cards.service";

@Component({
  selector: "app-board-list",
  templateUrl: "./board-list.component.html",
  styleUrls: ["./board-list.component.css"]
})
export class BoardListComponent implements OnInit, OnDestroy {
  cardNamelist = [];
  list = [];
  boardname;
  constructor(
    private toastr: ToastrService,
    private formbuilder: FormBuilder,
    private trelloCardsService: TrelloCardsService,
    private _ngZone: NgZone
  ) {}

  dynamicArray: Array<DynamicDashboardGrid> = [];
  newDynamic: any = {};
  newInnerCard: any = {};
  cards: any = [];
  cardlist: Boolean[] = [];

  ngOnInit(): void {
    this.getBoardList();
    this.newDynamic = { card: "" };
    this.dynamicArray.push(this.newDynamic);
    this.trelloCardsService.getAllCardNames().subscribe(data => {
      console.log("get all card name result " + JSON.stringify(data));
      this.cards = data;
      for (var i = 0; i < this.cards.length; i++) {
        this.cardlist[i] = true;
      }
    });
  }

  getBoardList() {
    this.trelloCardsService.getAllBoardName().subscribe(data => {
      console.log("getAllBoardName result " + JSON.stringify(data));
      this.boardname = data[0].name;
    });
  }
  cardTitleAdd(event, index, item) {
    this.cardlist[index] = true;
    const inputValue = event.target.value;
    var obj = {
      name: inputValue,
      tickets: []
    };

    this.trelloCardsService.addCard(obj).subscribe(data => {
      this.cards[index] = data;
    });
  }

  onKey(index1, event, index, item) {
    const inputValue = event.target.value;
    this.list = [];
    this.list = this.cards[index1].tickets;
    this.list.push({ cardtext: inputValue, id: "active" });
    this.cards[index1].tickets = [];
    this.cards[index1].tickets = this.list;
    event.target.value = "";
    this.trelloCardsService
      .updateCard(this.cards[index1].id, this.cards[index1])
      .subscribe(data => {
        console.log("add card name result " + JSON.stringify(data));
      });
  }

  add(cardtext, event) {
    this.list.push({ cardtext: cardtext, done: "active" });
    cardtext.value = "";
  }

  done(idx) {
    this.list[idx].done = this.list[idx].done === "done" ? "active" : "done";
  }

  remove(idx, iCard) {
    this.list = [];
    this.list = this.cards[iCard].tickets;
    this.cards[iCard].tickets = [];
    this.cards[iCard].tickets = this.list;
    this.list.splice(idx, 1);
  }

  addCard(index) {
    this.list = [];
    this._ngZone.run(() => {
      console.log("Outside Done!");
      var obj = {
        name: "",
        tickets: []
      };
      this.cards.push({
        obj
      });
    });
    // console.log("inner2 "+JSON.stringify( this.cards));
    // this.toastr.success('New card added successfully', 'New card');
    return true;
  }

  deleteCard(index, id) {
    if (this.cards.length == 1) {
      // this.toastr.error("Can't delete the card when there is only one card", 'Warning');
      return false;
    } else {
      this.cards.splice(index, 1);
      // this.toastr.warning('card deleted successfully', 'Delete card');
      return true;
    }
    this.trelloCardsService.deleteCard(id).subscribe(data => {
      console.log("delete card name result " + JSON.stringify(data));
    });
  }

  ngOnDestroy() {
    var id = 1;
    this.trelloCardsService.deleteBoard(id).subscribe(data => {
      console.log("delete baordname result " + JSON.stringify(data));
    });
  }
}
