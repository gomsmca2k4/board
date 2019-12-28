import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TrelloCardsService {
  uri = "http://localhost:3000/names";
  uriCard = "http://localhost:3000/card";

  constructor(private http: HttpClient) {}

  addBoard(obj) {
    console.log(obj);
    return this.http.post(this.uri + "/names", obj);
  }

  getBoardName() {
    return this.http.get(this.uri + "/names");
  }

  updateBoard(id, obj) {
    console.log(obj);
    return this.http.put(this.uri + "/names" + "/" + id, obj);
  }

  getAllBoardName() {
    return this.http.get(this.uri + "/names");
  }

  selectBoard(id) {
    return this.http.get(this.uri + "/names/" + id);
  }

  deleteBoard(id) {
    return this.http.delete(this.uri + "/names/" + id);
  }

  //Add card

  addCard(obj) {
    console.log(obj);
    return this.http.post(this.uri + "/card", obj);
  }
  updateCard(id, obj) {
    console.log("id " + id);

    console.log("obj " + JSON.stringify(obj));
    return this.http.put(this.uri + "/card/" + id, obj);
  }

  getAllCardNames() {
    return this.http.get(this.uri + "/card");
  }

  deleteCard(id) {
    return this.http.delete(this.uri + "/card/" + id);
  }
}
