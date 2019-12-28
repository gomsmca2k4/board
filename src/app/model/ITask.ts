export enum STATE {
    'DONE',
    'ACTIVE'
  }
  export interface ITask {
    cardText: string;
    id?: number;
    state?: STATE
  }
  