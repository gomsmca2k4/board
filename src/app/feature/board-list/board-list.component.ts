import { Component, OnInit, OnDestroy, NgZone } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
} from "@angular/cdk/drag-drop";

import { ICard } from "../../model/ICard";
import { ITask, STATE } from "../../model/ITask";
import { ActivatedRoute } from "@angular/router";
import { State } from '@ngrx/store';

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
  cards: Array<ICard> = [];
  cardList: boolean[] = [];

  ngOnInit(): void {
    this.newDynamic = { card: "" };
  }

  getBoardList() { }

  cardTitleAdd(event, index) {
    this.cardList[index] = true;
    const inputValue = event.target.value;
    const obj: ICard = {
      name: inputValue,
      tasks: [],
      id: index
    };
    this.cards[index] = obj;
  }

  addTask(cardIndex, event, item) {
    const inputValue = event.target.value;
    this.list = this.cards[cardIndex].tasks;
    this.list.push({
      cardText: inputValue,
      id: this.cards[cardIndex].tasks.length + 1,
      state: STATE.ACTIVE
    });
    this.cards[cardIndex].tasks = this.list;
    event.target.value = "";

    this.connectedTo = this.cards.map(card => card.id);
  }

  add(textInput, event) {
    this.list.push({ cardText: textInput, state: STATE.ACTIVE });
    textInput.value = "";
  }

  done(id) {
    this.list[id].state = this.list[id].state === STATE.DONE ? STATE.ACTIVE : STATE.DONE;
  }

  remove(id, cardIndex) {
    this.list = this.cards[cardIndex].tasks;
    this.cards[cardIndex].tasks = this.list;
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
        this.cards[event.container.data.id].tasks,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnDestroy() { }
}
