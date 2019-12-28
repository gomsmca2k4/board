  export interface IName {
        name: string;
        id: number;
    }

  export interface ITicket {
        cardtext: string;
        id: number;
    }

  export interface ICard {
        name: string;
        tickets: ITicket[];
        id: number;
    }


