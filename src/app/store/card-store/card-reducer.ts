/** New Implementations */
import { Action, createReducer, on } from '@ngrx/store';
import * as cartActions from './card-actions';
import { initialState, State } from './card-state';

const cardReducer = createReducer(
  initialState,
  on(cartActions.createCard, createCard),
  on(cartActions.deleteCard, deleteCard),
);

function createCard(state) {
  console.log('createCard');
  return { ...state, name: state.nome, id: state.id, tasks: state.tasks };
};

function deleteCard(state) {
  console.log('deleteCard');
  return { ...state, id: state.id };
};

export function reducer(state: State | undefined, action: Action) {
  return cardReducer(state, action);
}

export const cardFeatureKey = 'card';