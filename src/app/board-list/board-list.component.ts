import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { IName, ICard, ITicket } from './Iboardlist';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})

export class BoardListComponent implements OnInit, OnDestroy {

  cardNamelist = [];
  list = [];
  boardname;
  connectedTo = [];
  constructor( private formbuilder: FormBuilder,
               private route: ActivatedRoute, private ngzone: NgZone) {
    this.boardname = this.route.snapshot.params.id;
  }

  // dynamicArray: Array<DynamicDashboardGrid> = [];
  newDynamic: any = {};
  newInnerCard: any = {};
  cards: any = [];
  cardlist: boolean[] = [];

  ngOnInit(): void {
    this.newDynamic = { card: '' };
  }

   getBoardList() {
  }

  cardTitleAdd(event, index) {
    this.cardlist[index] = true;
    const inputValue = event.target .value;
    const obj = {
      name: inputValue,
      tickets: [],
      id: index,
    };
    this.cards[index] = obj;
  }

  onKey(index1, event, item) {
    const inputValue = event.target.value;
    this.list = [];
    this.list = this.cards[index1].tickets;
    this.list.push({ cardtext: inputValue, id: this.cards[index1].tickets.length + 1 });
    this.cards[index1].tickets = [];
    this.cards[index1].tickets = this.list;
    event.target.value = '';

    for (const card of this.cards) {
      this.connectedTo.push(card.id);
    }
  }

  add(cardtext, event) {
    this.list.push({ cardtext, done: 'active' });
    cardtext.value = '';
  }

  done(idx) {
    this.list[idx].done = this.list[idx].done === 'done' ? 'active' : 'done';
  }

  remove(idx, iCard) {
    this.list = [];
    this.list = this.cards[iCard].tickets;
    this.cards[iCard].tickets = [];
    this.cards[iCard].tickets = this.list;
    this.list.splice(idx, 1);
  }

  addCard() {
     this.list = [];
     this.ngzone.run(() => {
    const card: ICard = {
        name: '',
        tickets: [],
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
  console.log('event', event);
  if (event.previousContainer === event.container) {
      moveItemInArray(this.cards[event.container.data.id].tickets, event.previousIndex, event.currentIndex);
    } 
  }
  ngOnDestroy() {
 
  }
}
