export interface IName {
  id: number;
  name: string;
}

export interface ITicket {
  cardtext: string;
  id: number;
}

export interface ICard {
  name: string;
  id: number;
  tickets: ITicket[];
}
