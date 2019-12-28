import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TrelloBoardService {
  private boardName: BehaviorSubject<string>;
  cast: Observable<string>;
  constructor() {
    this.boardName = new BehaviorSubject<string>("gomathi");
    this.cast = this.boardName.asObservable();
  }

  sendData(data: string) {
    this.boardName.next(data);
  }
}
