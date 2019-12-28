import { Component, OnInit, OnDestroy, NgZone } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
} from "@angular/cdk/drag-drop";

import { ICard } from "../../model/ICard";
import { ITask, STATE } from "../../model/ITask";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-board-list",
  templateUrl: "./board-list.component.html",
  styleUrls: ["./board-list.component.scss"]
})
export class BoardListComponent implements OnInit, OnDestroy {
  cardNamelist = [];
  list: Array<ITask> = [];
  boardName;
  connectedTo = [];
  constructor(
    private route: ActivatedRoute,
    private ngzone: NgZone
  ) {
    this.boardName = this.route.snapshot.params.id;
  }

  newDynamic: any = {};
  newInnerCard: any = {};
  cards: any = [];
  cardList: boolean[] = [];

  ngOnInit(): void {
    this.newDynamic = { card: "" };
  }

  getBoardList() { }

  cardTitleAdd(event, index) {
    this.cardList[index] = true;
    const inputValue = event.target.value;
    const obj = {
      name: inputValue,
      tickets: [],
      id: index
    };
    this.cards[index] = obj;
  }

  onKey(index1, event, item) {
    const inputValue = event.target.value;
    this.list = this.cards[index1].tickets;
    this.list.push({
      cardText: inputValue,
      id: this.cards[index1].tickets.length + 1
    });
    this.cards[index1].tickets = [];
    this.cards[index1].tickets = this.list;
    event.target.value = "";

    for (const card of this.cards) {
      this.connectedTo.push(card.id);
    }
  }

  add(textInput, event) {
    this.list.push({ cardText: textInput, state: STATE.ACTIVE });
    textInput.value = "";
  }

  done(id) {
    this.list[id].state = this.list[id].state === STATE.DONE ? STATE.ACTIVE : STATE.DONE;
  }

  remove(id, cardIndex) {
    this.list = this.cards[cardIndex].tickets;
    this.cards[cardIndex].tickets = this.list;
    this.list.splice(id, 1);
  }

  addCard() {
    this.list = [];
    this.ngzone.run(() => {
      const card: ICard = {
        name: "",
        tasks: [],
        id: 0
      };
      this.cards.push({
        card
      });
    });
    return true;
  }

  deleteCard(index, id) {
    if (this.cards.length === 0) {
      return false;
    } else {
      this.cards.splice(index, 1);
      return true;
    }
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.cards[event.container.data.id].tickets,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnDestroy() { }
}
