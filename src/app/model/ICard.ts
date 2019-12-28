import { ITask } from './ITask';

export interface ICard {
  name: string;
  id: number;
  tasks: ITask[];
}