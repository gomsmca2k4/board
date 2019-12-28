import { Action, createAction } from '@ngrx/store';
import { ICard } from 'src/app/model/ICard';

export enum ActionTypes {
  CREATE = '[Card Feature] Create Card',
  DELETE = '[Card Feature] Delete Card',
  UPDATE = '[Card Feature] Update Card',
}

export class CreateCardAction implements Action {
  readonly type = ActionTypes.CREATE;
  constructor(public payload: { items: ICard[] }) {}}

export class DeleteCardAction implements Action {
readonly type = ActionTypes.DELETE;
constructor(public payload: { items: ICard[] }) {};
}

export class UpdateCardAction implements Action {
readonly type = ActionTypes.UPDATE;
constructor(public payload: { items: ICard[] }) {};
}

export type Actions = CreateCardAction | UpdateCardAction | DeleteCardAction;

export const createCardAction = createAction('[Card Feature] Create Card');
export const deleteCardAction = createAction('[Card Feature] Delete Card');
export const updateCardAction = createAction('[Card Feature] Update Card');